import {
  Box,
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
import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import Navbar from "../components/Navbar";
import { Card } from "../components/demo/Card";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Demo() {
  return (
    <VStack minH={"100vh"} p={8}>
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
          href={"/"}
          role={"group"}
          display={{ base: "none", lg: "block" }}
          p={2}
          rounded={"md"}
          _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
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
                {"Login"}
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
      <Heading
        pt={12}
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
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
      </SimpleGrid>
    </VStack>
  );
}

export default Demo;
