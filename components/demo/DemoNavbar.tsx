import {
  Box,
  Flex,
  HStack,
  Icon,
  Spinner,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import { logoutUser } from "../../features/auth/user.slice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function DemoNavbar() {
  const dispatch = useAppDispatch();
  const userSlice = useSelector((state: RootState) => state.user);

  return (
    <HStack w={"100%"} justify={"space-between"}>
      <Box fontFamily={"heading"} w={150} color="black">
        <NextLink href="/">
          <Box
            w={[125, 150, 150, 150]}
            h={[34.76, 41.71, 41.71, 41.71]}
            position="relative"
          >
            <NextImage
              src="/images/logo-black.svg"
              alt="The Opportunities Portal logo"
              fill
              priority
              sizes="(max-width: 0px) 125px, (max-width: 500px) 150px"
            />
          </Box>
        </NextLink>
      </Box>
      <Link
        role={"group"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        onClick={
          userSlice.user
            ? (e: any) => {
                e.preventDefault();
                dispatch(logoutUser());
              }
            : () => {
                window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
              }
        }
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            {userSlice.isLoading ? (
              // Show loader if isLoading is true
              <Flex align={"center"}>
                <Spinner size="sm" mr={2} />
                <Text>Attempting to log in...</Text>
              </Flex>
            ) : (
              // Show login/logout depending on user state
              <Text
                transition={"all .3s ease"}
                _groupHover={{ color: "pink.400" }}
                fontWeight={500}
                fontSize={["md", "lg", "lg", "lg"]}
                whiteSpace={"nowrap"}
              >
                {userSlice.user ? "Logout" : "Login"}
              </Text>
            )}
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{
              opacity: "100%",
              transform: "translateX(0)",
            }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </HStack>
  );
}
