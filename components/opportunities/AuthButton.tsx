import {
  Box,
  Flex,
  Icon,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { UserSliceInitialState } from "../../types/types";
import { useAppDispatch } from "../../app/store";
import { logoutUser } from "../../features/auth/user.slice";
import { ChevronRightIcon } from "@chakra-ui/icons";

function AuthButton({ userSlice }: { userSlice: UserSliceInitialState }) {
  const dispatch = useAppDispatch();

  return (
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
  );
}

export default AuthButton;
