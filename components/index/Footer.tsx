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
      h={"75vh"}
      columns={2}
      bg={"#1E1E1E"}
      color={"white"}
      overflow="hidden"
    >
      <Box w={400} pl={8}>
        <Heading mb={8}>TOP</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Text>
      </Box>
      <Box w={400} justifySelf={"end "} pr={8}>
        <Heading mb={8}>OTHER LINKS</Heading>
        <HStack spacing={6} w={"100%"}>
          <Text>Community</Text>
          <Text>Hire Talent</Text>
          <Text>Find Work</Text>
          <Text>Events</Text>
        </HStack>
      </Box>
      <Box w={400} pl={8}>
        <Heading mb={8}>COMPANY</Heading>
        <HStack spacing={6}>
          <Text>About</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms & Conditions</Text>
        </HStack>
      </Box>
      <Box w={400} justifySelf={"end "} pr={8}>
        <Heading mb={8}>SOCIAL</Heading>
        <HStack bg={"#121212"} p={4} justify={"space-between"} w="100%">
          <SocialIcon
            url="https://twitter.com/johntony366/"
            fgColor="white"
            bgColor="#292929"
          />
          <SocialIcon
            url="https://instagram.com/john.tony366/"
            fgColor="white"
            bgColor="#292929"
          />
          <SocialIcon
            url="https://www.linkedin.com/johntony366"
            fgColor="white"
            bgColor="#292929"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCjOxgxgP5Dhw0iBpaQpX0vA"
            fgColor="white"
            bgColor="#292929"
          />
        </HStack>
      </Box>
      <VStack align={"start"} justify={"end"} spacing={4} pl={8}>
        <Image src="/images/logo.svg" alt="logo"></Image>
        <Text>© 2022, TOP.pvt. All Rights Reserved.</Text>
      </VStack>
    </SimpleGrid>
  );
};
