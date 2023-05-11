import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactHTMLElement, useEffect, useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import Cookies from "js-cookie";

import Navbar from "../components/Navbar";
import { Card } from "../components/demo/Card";
import { ChevronRightIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { RootState, useAppDispatch } from "../app/store";
import { useSelector } from "react-redux";
import { fetchOpportunities } from "../features/opportunity/opportunity.slice";
import { fetchUser, logoutUser } from "../features/auth/user.slice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface OpportunitySchema {
  _id: string;
  position: string;
  company: string;
  contentTitle: string;
  contentBody: string;
  skills: [{ id: string; text: string }];
  link: string;
  emailAddress: string;
}

function Demo() {
  const dispatch = useAppDispatch();
  const userSlice = useSelector((state: RootState) => state.user);
  const opportunitySlice = useSelector((state: RootState) => state.opportunity);
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateOpportunity = () => {
    if (userSlice.user) {
      router.push("./create");
    } else {
      toast.error("You must be logged in to create an opportunity!", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  };

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    async function fetchUserHelper() {
      if (!userSlice.user) {
        await dispatch(fetchUser());
      }
      await dispatch(fetchOpportunities());
    }

    fetchUserHelper();
  }, []);

  useEffect(() => {
    if (userSlice.isSuccess && !userSlice.user) {
      toast.error("You have been logged out!", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  }, [userSlice.user]);

  return (
    <VStack minH={"100vh"} p={8} gap={4}>
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
      <Heading
        pt={4}
        size={"3xl"}
        textDecoration={"underline"}
        textAlign={"center"}
      >
        Find Opportunities
      </Heading>

      <HStack alignItems={"center"}>
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder={`Search...`}
            />
          </InputGroup>
        </Box>
        <Button onClick={handleCreateOpportunity}>Create opportunity</Button>
      </HStack>
      {!userSlice.user && (
        <Text mt={2} color={"red.600"} fontSize={"2xl"}>
          Please login to access contact details
        </Text>
      )}
      <SimpleGrid
        w={"100%"}
        minChildWidth="300px"
        spacing={12}
        maxW={"1200px"}
        justifyItems={"center"}
        pt={8}
      >
        {!opportunitySlice.isLoading ? (
          Array.from(
            new Set([
              ...opportunitySlice.opportunities.filter((opportunity) =>
                opportunity.position
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              ),
              ...opportunitySlice.opportunities.filter((opportunity) =>
                opportunity.skills.some((skill) =>
                  skill.text.toLowerCase().includes(searchQuery.toLowerCase())
                )
              ),
            ])
          ).map((opportunity) => (
            <Card
              key={opportunity._id}
              {...opportunity}
              user={userSlice.user}
            />
          ))
        ) : (
          <Flex align={"center"}>
            <Spinner size="sm" mr={2} />
            <Text>Loading opportunities</Text>
          </Flex>
        )}
      </SimpleGrid>
    </VStack>
  );
}

export default Demo;
