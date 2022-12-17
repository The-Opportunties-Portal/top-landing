import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const PodcastsAndBlogs = () => {
  return (
    <Flex direction={"column"} h={"75vh"} bg="rgba(3, 0, 30, 1)">
      <Flex
        grow={1}
        direction={"column"}
        justify={"center"}
        textAlign={"center"}
      >
        <Text
          mt={8}
          fontWeight={"bold"}
          fontSize={"3xl"}
          color={"rgba(229, 217, 253, 1)"}
        >
          Works
        </Text>
        <Text
          fontWeight={"bold"}
          fontSize={"5xl"}
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
      <Flex grow={2} justify={"center"} gap={16} align={"center"}>
        <Image
          w={400}
          h={300}
          borderRadius={24}
          alt="alskfj"
          src="/images/Rectangle 2462.svg"
        ></Image>
        <Image
          w={400}
          h={300}
          borderRadius={24}
          alt="alskfj"
          src="/images/Rectangle 2463.svg"
        ></Image>
      </Flex>
    </Flex>
  );
};
