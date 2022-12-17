import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Opportunities = () => {
  return (
    <Box
      className="opportunities"
      h="100vh"
      pt={"60px"}
      color="white"
      bg="rgba(3, 0, 30, 1)"
    >
      <VStack height={"100%"}>
        <Heading color={"rgba(154, 153, 165, 1)"} mb={8}>
          Opportunities
        </Heading>
        <Heading color={"rgba(235, 154, 133, 1)"} fontSize={"5xl"}>
          Welcome to the world of opportunities
        </Heading>
        <Flex
          flexGrow={"1"}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Flex gap={12}>
            <Box maxW={500} bg="rgba(30, 26, 26, 1)" p={8} borderRadius={42}>
              <Flex mb={4} justify={"space-between"}>
                <Text
                  alignSelf={"center"}
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                  sx={{
                    background:
                      "linear-gradient(180deg, #34C6F7 0%, #99F8D0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  I want to give
                </Text>
                <Image
                  w={120}
                  src="images/Business vision-pana 1.svg"
                  alt="man in the clouds"
                />
              </Flex>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
            <Box maxW={500} bg="rgba(30, 26, 26, 1)" p={8} borderRadius={42}>
              <Flex mb={4} justify={"space-between"}>
                <Text
                  alignSelf={"center"}
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                  sx={{
                    background:
                      "linear-gradient(180deg, #AA72EF 0%, #C987F2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  I want to take
                </Text>
                <Image
                  w={120}
                  src="images/Digital nomad-pana 1.svg"
                  alt="man in the clouds"
                />
              </Flex>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </VStack>
    </Box>
  );
};
