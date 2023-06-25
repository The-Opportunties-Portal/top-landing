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
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import { logoutUser } from "../../features/auth/user.slice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import { ChevronRightIcon } from "@chakra-ui/icons";
import AuthButton from "./AuthButton";
import EditOpportunties from "./EditOpportunties";
import AllOpportunities from "./AllOpportunities";

export default function DemoNavbar({ onEditPage }: { onEditPage: boolean }) {
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
              alt="The Opprtunities Portal logo"
              fill
              priority
              sizes="(max-width: 0px) 125px, (max-width: 500px) 150px"
            />
          </Box>
        </NextLink>
      </Box>
      <HStack>
        <Link
          as={NextLink}
          href="profiling"
          fontWeight={500}
          fontSize={["md", "lg", "lg", "lg"]}
          p={2}
        >
          Profiling
        </Link>
        {onEditPage ? (
          <AllOpportunities userSlice={userSlice} />
        ) : (
          <EditOpportunties userSlice={userSlice} />
        )}
        <AuthButton userSlice={userSlice} />
      </HStack>
    </HStack>
  );
}
