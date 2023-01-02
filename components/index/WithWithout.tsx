import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const WithWithout = () => {
  return (
    <VStack minH={"100vh"} bg="rgba(3, 0, 30, 1)">
      <Text
        color="white"
        fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
        maxW={"800px"}
        px={"12px"}
        textAlign="center"
        mb={{ base: "32px", md: "32px", lg: "48px" }}
      >
        Helping talented individuals succeed through growth opportunities.
      </Text>
      <Flex
        gap={{ base: "32px", md: "32px", lg: "48px" }}
        w="100%"
        justify={"center"}
        align={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Image
          src="/images/WithoutTOP.svg"
          alt="without The Opportunties Portal"
          w={{ base: "350px", md: "45%" }}
          maxW="500px"
        ></Image>
        <Image
          src="/images/WithTOP.svg"
          alt="with The Opportunties Portal"
          w={{ base: "350px", md: "45%" }}
          maxW="500px"
        ></Image>
      </Flex>
    </VStack>
  );
};
