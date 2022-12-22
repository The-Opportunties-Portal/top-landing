import {
  Box,
  Flex,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const PodcastsAndBlogs = () => {
  return (
    <Flex
      id="podcastsBlogs"
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
        <a
          href="https://youtu.be/GpYu3AepSRM"
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            w={{ base: "300px", sm: "400px" }}
            borderRadius={24}
            alt="The Opportunties Portal Podcast"
            src="/images/podcastThumbnail.jpg"
          ></Image>
        </a>
        <a
          href="https://medium.com/@anshamogh/where-talent-meets-opportunities-43e1b2473f3d"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            w={{ base: "300px", sm: "400px" }}
            borderRadius={24}
            alt="The Opportunties Portal Blogs"
            src="/images/Rectangle 2463.svg"
          ></Image>
        </a>
      </Flex>
    </Flex>
  );
};
