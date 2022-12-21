import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const PodcastsAndBlogs = () => {
  return (
    <Flex
      direction={"column"}
      minH={{ base: "75vh", sm: "100vh", md: "75vh" }}
      bg="rgba(3, 0, 30, 1)"
    >
      <Box
        position={"relative"}
        w="50vw"
        h={{ base: 12, md: 16 }}
        borderRight={"1px solid rgba(231, 150, 141, 1)"}
        zIndex={11}
      />
      <Flex direction={"column"} justify={"center"} textAlign={"center"}>
        <Text
          mt={8}
          fontWeight={"bold"}
          fontSize={{ base: "xl", sm: "3xl" }}
          color={"rgba(229, 217, 253, 1)"}
        >
          Works
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "3xl", sm: "5xl" }}
          sx={{
            background: "linear-gradient(180deg, #F4A373 0%, #E29298 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Podcast & Blogs
        </Text>
      </Flex>
      <Flex
        direction={{ base: "column", md: "row" }}
        grow={1}
        justify={"center"}
        align={"center"}
        gap={{ base: 4, sm: 0, md: 16 }}
      >
        <Image
          w={{ base: "300px", sm: "400px" }}
          h={{ base: "200px", sm: "300px" }}
          borderRadius={24}
          alt="alskfj"
          src="/images/Rectangle 2462.svg"
        ></Image>
        <Image
          w={{ base: "300px", sm: "400px" }}
          h={{ base: "200px", sm: "300px" }}
          borderRadius={24}
          alt="alskfj"
          src="/images/Rectangle 2463.svg"
        ></Image>
      </Flex>
    </Flex>
  );
};
