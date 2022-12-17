import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const KnowMore = () => {
  return (
    <Flex h="50vh" direction={"column"} bg={"rgba(30, 30, 30, 1)"}>
      <Heading
        textAlign={"center"}
        mt={8}
        mb={16}
        color={"rgba(242, 246, 249, 1)"}
      >
        Get to know more about our platform
      </Heading>
      <Flex justify={"center"} gap={24}>
        <Box
          w={200}
          h={200}
          bg={"#2B2B2B"}
          sx={{
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
            borderRadius: "45px",
            transform: "rotate(180deg)",
          }}
        ></Box>
        <Box
          w={200}
          h={200}
          bg={"#2B2B2B"}
          sx={{
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
            borderRadius: "45px",
            transform: "rotate(180deg)",
          }}
        ></Box>
        <Box
          w={200}
          h={200}
          bg={"#2B2B2B"}
          sx={{
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
            borderRadius: "45px",
            transform: "rotate(180deg)",
          }}
        ></Box>
      </Flex>
    </Flex>
  );
};
