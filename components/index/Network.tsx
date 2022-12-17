import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Network = () => {
  return (
    <Box h="100vh" pt={"60px"} color="white" bg="rgba(3, 0, 30, 1)">
      <Flex h="100%" direction={"column"} justify={"center"} align={"center"}>
        <Flex w="100%" justifyContent={"space-around"}>
          <Box>
            <Heading
              maxW={400}
              mb={12}
              color={"rgba(9, 124, 158, 1)"}
              fontSize="4xl"
            >
              Find a circle to work, earn, and network
            </Heading>
            <Text maxW={500} fontSize="large" textAlign={"justify"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
          <Box alignSelf={"center"}>
            <Image
              w={250}
              src="/images/3-circles.svg"
              alt="3 overlapping circles"
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
