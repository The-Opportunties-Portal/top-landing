import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Network = () => {
  return (
    <Flex
      minH="100vh"
      pt={{ base: "100px", md: "40px" }}
      pb={"60px"}
      color="white"
      bg="rgba(3, 0, 30, 1)"
      px={8}
      direction={"column"}
      justify={"center"}
      align={"center"}
      position="relative"
      zIndex={9}
    >
      <Flex
        w="100%"
        justifyContent={"space-around"}
        gap={8}
        direction={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Box alignSelf={"center"}>
          <Heading
            maxW={400}
            mb={12}
            color={"rgba(9, 124, 158, 1)"}
            fontSize={{ base: "3xl", sm: "4xl" }}
          >
            Find a circle to work, earn, and network
          </Heading>
          <Text maxW={500} fontSize={{ base: "small", sm: "medium" }}>
            The Opportunities Portal is a platform that connects skilled
            students willing to work, with startups or project leaders on their
            campus. It provides a swift, direct, and transparent way for these
            groups to discover and engage with one another, potentially leading
            to new job opportunities, partnerships, or investments.
          </Text>
          <br />
          <Text maxW={500} fontSize={{ base: "small", sm: "medium" }}>
            For all students, TOP is a valuable resource for finding and
            learning about new opportunities with startups and VCs on their
            campus and finding potential niches and people they are looking for!
          </Text>
          <br />
          <Text maxW={500} fontSize={{ base: "small", sm: "medium" }}>
            For startups and VCs and other hiring parties, TOP is a useful tool
            for accessing a pool of qualified candidates and calling the best
            fit for their organization.
          </Text>
        </Box>
        <Box alignSelf={"center"}>
          <Image
            w={{ base: "200px", sm: "250px" }}
            src="/images/3-circles.svg"
            alt="3 overlapping circles"
          />
        </Box>
      </Flex>
      <Box
        position={"absolute"}
        w="50%"
        bottom={0}
        left={0}
        h={{ base: 12, md: 16 }}
        borderRight={"1px solid rgba(236, 155, 131, 1)"}
        zIndex={1}
      />
    </Flex>
  );
};
