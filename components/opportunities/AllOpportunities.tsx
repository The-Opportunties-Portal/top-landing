import {
  Box,
  Flex,
  Icon,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { UserSliceInitialState } from "../../types/types";
import { useAppDispatch } from "../../app/store";
import { logoutUser } from "../../features/auth/user.slice";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function AllOpportunities({ userSlice }: { userSlice: UserSliceInitialState }) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <Link
      display={userSlice.user ? "block" : "none"}
      role={"group"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("blue.50", "gray.900") }}
      onClick={() => router.push("/opportunities")}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}
            fontSize={["md", "lg", "lg", "lg"]}
            whiteSpace={"nowrap"}
          >
            All Listings
          </Text>
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
          <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
}

export default AllOpportunities;
