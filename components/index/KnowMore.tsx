import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const KnowMore = () => {
  return (
    <Flex h="75vh" direction={"column"} bg={"rgba(30, 30, 30, 1)"}>
      <Heading
        textAlign={"center"}
        mt={12}
        color={"rgba(242, 246, 249, 1)"}
        mx={4}
      >
        Get to know more about our platform
      </Heading>
      <Flex justify={"center"} align={"center"} gap={24} flexGrow={1}>
        <Box
          w={"75vw"}
          maxW={760}
          bg={"#d9d9d9"}
          sx={{
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
            borderRadius: "45px",
            transform: "rotate(180deg)",
            aspectRatio: {
              base: "1 / 1",
              sm: "3 / 2",
              md: "2 / 1",
            },
          }}
        ></Box>
        {/* <Box
          w={200}
          h={200}
          bg={"#2B2B2B"}
          sx={{
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
            borderRadius: "45px",
            transform: "rotate(180deg)",
          }}
        ></Box> */}
      </Flex>
    </Flex>
  );
};
