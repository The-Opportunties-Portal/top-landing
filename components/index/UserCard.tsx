import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

import { UserType } from "./Users";

export const usersImageVariant = {
  hidden: {
    x: 10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const Card = ({ user, image }: { user: UserType; image: String }) => {
  const userImageVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Box
      maxW="440px"
      bg={"#201d38"}
      p={8}
      borderRadius={32}
      position="relative"
    >
      <Flex>
        <Image
          as={motion.img}
          key={image as React.Key}
          h={{ base: "48px", md: "64px", lg: "64px" }}
          w={{ base: "48px", md: "64px", lg: "64px" }}
          src={`/images/${image}.svg`}
          alt="ellipse"
          mr={4}
          variants={userImageVariant}
          initial="hidden"
          animate="visible"
        />
        <Box>
          <Heading
            as={motion.h2}
            key={user.type as React.Key}
            fontSize={{
              base: "lg",
              md: "xl",
              lg: "2xl",
            }}
            sx={{
              background: "linear-gradient(180deg, #FD8CA2 0%, #DA9A79 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
            variants={userImageVariant}
            initial="hidden"
            animate="visible"
          >
            {user.type}
          </Heading>
          <Heading
            as={motion.h1}
            key={user.heading as React.Key}
            fontSize={{
              base: "xl",
              md: "2xl",
              lg: "3xl",
            }}
            color="#784989"
            mb={4}
            variants={userImageVariant}
            initial="hidden"
            animate="visible"
          >
            {user.heading}
          </Heading>
        </Box>
      </Flex>
      <Text
        as={motion.p}
        key={user.content as React.Key}
        fontSize={{
          base: "xs",
          md: "sm",
          lg: "md",
        }}
        variants={userImageVariant}
        initial="hidden"
        animate="visible"
      >
        {user.content}
      </Text>
      <Flex
        className="HELLO"
        position={"absolute"}
        display={{ base: "none", md: "flex" }}
        left={0}
        bottom={0}
        w="100%"
        transform="translate(-50%, 100%)"
        direction={"column"}
        align="end"
      >
        <Box
          h={{ md: "84px", lg: "96px" }}
          w={{ md: "50%", lg: "100%" }}
          borderRight="2px solid rgba(9, 126, 160, 1)"
          borderBottom="2px solid rgba(9, 126, 160, 1)"
          zIndex={2}
        />
        <Box
          w={{ md: "50%", lg: "100%" }}
          h={{ md: "84px", lg: "96px" }}
          borderLeft="2px solid rgba(9, 126, 160, 1)"
        />
      </Flex>
      <Box
        position="absolute"
        left={{ base: "0px" }}
        bottom="0px"
        transform={"translateY(100%)"}
        display={{ base: "block", md: "none" }}
        w="50%"
        h="48px"
        borderRight="2px solid rgba(9, 126, 160, 1)"
      />
    </Box>
  );
};
