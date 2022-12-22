import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { UserType } from "./Users";
import styles from "../../styles/UserCard.module.css";

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

export const UserCard = ({
  user,
  image,
  cn,
  index,
  allUsers,
  setAllUsers,
}: {
  user: UserType;
  image: String;
  cn: string;
  index: number;
  allUsers: Array<UserType>;
  setAllUsers: React.Dispatch<React.SetStateAction<Array<UserType>>>;
}) => {
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

  const userHeadingVariant = {
    hidden: {
      x: -10,
      y: index == 0 ? 0 : 32,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: index == 0 ? 0 : 32,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [classes, setClasses] = useState("");
  let style;
  if (classes.includes("transformThis")) {
    style = styles.transformThis;
  } else {
    style = styles.transformPrev;
  }

  return (
    <Flex
      w="100%"
      h={{ base: "300px", lg: "375px" }}
      justify="center"
      align={index == 0 ? "center" : "start"}
      className={`${cn} ${style}`}
      borderRadius={32}
      zIndex={allUsers.length - index}
    >
      <Box
        maxW="440px"
        p={8}
        position="relative"
        as={"button"}
        onClick={function () {
          if (classes.includes("transformThis")) {
            classes.replace("transformThis", "");
          }
          if (classes.includes("transformPrev")) {
            classes.replace("transformPrev", "");
          }
          setAllUsers((oldAllUsers) =>
            oldAllUsers.filter((oldUser) => oldUser !== user)
          );
          setClasses((oldClasses) => {
            return oldClasses + " transformThis transformPrev";
          });
          setAllUsers((oldAllUsers) => [user, ...oldAllUsers]);
        }}
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
                base: "xl",
                md: "2xl",
                lg: "3xl",
              }}
              textAlign="start"
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
                base: "lg",
                md: "xl",
                lg: "2xl",
              }}
              textAlign="start"
              color="#784989"
              mb={4}
              variants={userHeadingVariant}
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
          textAlign={"start"}
        >
          {user.content}
        </Text>
      </Box>
    </Flex>
  );
};
