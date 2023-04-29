import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import Cookies from "js-cookie";

import Navbar from "../components/Navbar";
import { Card } from "../components/demo/Card";
import { ChevronRightIcon } from "@chakra-ui/icons";
import axios from "axios";

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
  const [sessionCookie, setSessionCookie] = React.useState<string | null>(null);
  const [opportunities, setOpportunities] = React.useState<OpportunitySchema[]>(
    []
  );
  console.log(opportunities);

  useEffect(() => {
    const session = Cookies.get("connect.sid") || null;
    setSessionCookie(session);

    async function fetchData() {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/opportunity",
        {
          withCredentials: true,
        }
      );
      setOpportunities(response.data);
    }

    fetchData();
  }, [sessionCookie]);

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
                src="/images/logo.svg"
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
            sessionCookie
              ? () => {
                  axios
                    .get("http://localhost:3001/auth/logout", {
                      withCredentials: true,
                    })
                    .then((res) => {
                      setSessionCookie(null);
                      Cookies.set("connect.sid", "");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              : () => {
                  window.location.href = `http://localhost:3001/auth`;
                }
          }
        >
          <Stack direction={"row"} align={"center"}>
            <Box>
              <Text
                transition={"all .3s ease"}
                _groupHover={{ color: "pink.400" }}
                fontWeight={500}
                fontSize={["md", "lg", "lg", "lg"]}
                whiteSpace={"nowrap"}
              >
                {sessionCookie ? "Logout" : "Login"}
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
              <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
            </Flex>
          </Stack>
        </Link>
      </HStack>
      <Link href="./create">
        <Button>Create opportunity</Button>
      </Link>
      <Heading
        pt={4}
        size={"3xl"}
        textDecoration={"underline"}
        textAlign={"center"}
      >
        Find Opportunities
      </Heading>
      <SimpleGrid
        w={"100%"}
        minChildWidth="300px"
        spacing={12}
        maxW={"1200px"}
        justifyItems={"center"}
        pt={8}
      >
        {opportunities.map((opportunity) => (
          <Card key={opportunity._id} {...opportunity} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default Demo;
