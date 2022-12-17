import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Opportunities = () => {
  return (
    <Box
      className="opportunities"
      h="100vh"
      pt={{ base: 20, lg: 40 }}
      color="white"
      bg="rgba(3, 0, 30, 1)"
    >
      <VStack height={"100%"}>
        <Heading
          color={"rgba(154, 153, 165, 1)"}
          w="100%"
          mb={{ base: 2, lg: 8 }}
          textAlign={{
            base: "start",
            sm: "center",
          }}
          fontSize={{
            base: "xl",
            lg: "3xl",
          }}
          pl={{ base: 8, sm: 0 }}
          pr={{ base: 4, sm: 0 }}
        >
          Opportunities
        </Heading>
        <Heading
          color={"rgba(235, 154, 133, 1)"}
          fontSize={{
            base: "2xl",
            lg: "5xl",
          }}
          alignSelf={{
            base: "start",
            sm: "center",
          }}
          pl={{ base: 8, sm: 0 }}
          pr={{ base: 4, sm: 0 }}
        >
          Welcome to the world of opportunities
        </Heading>
        <Flex
          flexGrow={"1"}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
          px={8}
        >
          <Flex
            direction={{
              base: "column",
              lg: "row",
            }}
            gap={{ base: 4, lg: 12 }}
          >
            <Box maxW={500} bg="rgba(30, 26, 26, 1)" p={8} borderRadius={42}>
              <Flex mb={4} justify={"space-between"}>
                <Text
                  alignSelf={"center"}
                  fontSize={{ md: "2xl", lg: "4xl" }}
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
                  w={{ base: "60px", lg: "120px" }}
                  src="images/Business vision-pana 1.svg"
                  alt="man in the clouds"
                />
              </Flex>
              <Text
                fontSize={{
                  base: "sm",
                  md: "md",
                  lg: "lg",
                }}
              >
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
                  fontSize={{ md: "2xl", lg: "4xl" }}
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
                  w={{ base: "60px", lg: "120px" }}
                  src="images/Digital nomad-pana 1.svg"
                  alt="man in the clouds"
                />
              </Flex>
              <Text
                fontSize={{
                  base: "sm",
                  md: "md",
                  lg: "lg",
                }}
              >
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
