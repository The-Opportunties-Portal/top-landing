import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <SimpleGrid
      p={12}
      minH={{ base: "75vh", md: "60vh" }}
      columns={{ base: 1, md: 2 }}
      spacingY={{ base: 8, lg: 4 }}
      bg={"#1E1E1E"}
      color={"white"}
      overflow="hidden"
      justifyItems={"center"}
    >
      <Box w={400} pl={8}>
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          TOP
        </Heading>
        <Text fontSize={{ base: "xs", sm: "sm" }}>
          Helping talented individuals find and pursue the right opportunities
          that can help them grow and succeed.
        </Text>
      </Box>
      <Box
        w={400}
        justifySelf={{ base: "center", md: "end" }}
        pr={{ base: 0, md: 8 }}
        pl={{ base: 8, md: 0 }}
      >
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          OTHER LINKS
        </Heading>
        <HStack fontSize={{ base: "xs", sm: "sm" }} spacing={6} w={"100%"}>
          <Text>Community</Text>
          <Text>Join our team</Text>
        </HStack>
      </Box>
      <Box w={400} pl={8}>
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          COMPANY
        </Heading>
        <HStack fontSize={{ base: "xs", sm: "sm" }} spacing={6}>
          <Text>About</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms & Conditions</Text>
        </HStack>
      </Box>
      <Box
        w={400}
        justifySelf={{ base: "center", md: "end" }}
        pr={{ base: 0, md: 8 }}
        pl={{ base: 8, md: 0 }}
      >
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          SOCIAL
        </Heading>
        <HStack justify={"space-between"} w={{ base: "300px", md: "300px" }}>
          <SocialIcon
            url="https://twitter.com/johntony366/"
            fgColor="white"
            bgColor="#3C3C3C"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://instagram.com/john.tony366/"
            fgColor="white"
            bgColor="#3C3C3C"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/johntony366"
            fgColor="white"
            bgColor="#3C3C3C"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCjOxgxgP5Dhw0iBpaQpX0vA"
            fgColor="white"
            bgColor="#3C3C3C"
            style={{ height: 35, width: 35 }}
          />
        </HStack>
      </Box>
      <VStack w="400px" align={"start"} justify={"end"} spacing={4} pl={8}>
        <Image src="/images/logo.svg" alt="logo"></Image>
        <Text fontSize={{ base: "xs", sm: "sm" }}>
          © 2022, TOP.pvt. All Rights Reserved.
        </Text>
      </VStack>
    </SimpleGrid>
  );
};
