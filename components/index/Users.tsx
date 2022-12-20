import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "../../styles/Users.module.css";

export const Users = () => {
  const initialImage = "Ellipse 5";
  const [image, setImage] = useState(initialImage);

  const variants = {
    initial: {
      x: 100,
      opacity: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -100,
      opacity: 0.5,
    },
  };

  return (
    <Flex
      direction="column"
      h="100vh"
      pt={{ base: "48px", md: "60px" }}
      color="white"
      bg="rgba(3, 0, 30, 1)"
    >
      <Heading
        textAlign={"center"}
        fontSize={{
          base: "3xl",
          md: "5xl",
        }}
        mb={{ base: 4, md: 32 }}
        sx={{
          background: "linear-gradient(180deg, #B981CF 0%, #9098CC 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Type of Users
      </Heading>
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        justify={{ base: "start", sm: "start", md: "space-around" }}
        align={"center"}
        flexGrow={1}
        gap={{ sm: 12, md: 0 }}
      >
        <Box className="users">
          <Heading
            color={"#784989"}
            textAlign="center"
            fontSize={{
              base: "0px",
              md: "4xl",
            }}
          >
            Users
          </Heading>
          <Image
            key={image}
            as={motion.img}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            src={`/images/${image} User.svg`}
            alt="user making plans"
            w={{ base: "300px", md: "400px" }}
            h={{ base: "300px", md: "400px" }}
          />
        </Box>
        <Flex
          bg={"#12102c"}
          borderRadius={32}
          h="fit-content"
          direction={{ base: "column", sm: "row" }}
          mx={8}
        >
          <Flex
            // height={"100%"}
            direction={{ base: "row", sm: "column" }}
            justify={"space-around"}
            align={"center"}
            minW={{ base: "40px", md: "60px", lg: "80px" }}
            p={2}
          >
            <Image
              className={styles.subImage}
              onClick={(e) => {
                if (e.target instanceof HTMLElement)
                  setImage(e.target.dataset.img || " ");
              }}
              data-img="Ellipse 5"
              sx={{
                base: {
                  h: "60%",
                },
                sm: {
                  w: "60%",
                },
              }}
              // h={{ base: "60%", sm: "0" }}
              // w={{ sm: "60%" }}
              src="/images/Ellipse 5.svg"
              alt="first ellipse"
            ></Image>
            <Image
              className={styles.subImage}
              onClick={(e) => {
                if (e.target instanceof HTMLElement)
                  setImage(e.target.dataset.img || " ");
              }}
              data-img="Ellipse 6"
              sx={{
                base: {
                  h: "60%",
                },
                sm: {
                  w: "60%",
                },
              }}
              src="/images/Ellipse 6.svg"
              alt="second ellipse"
            ></Image>
            <Image
              className={styles.subImage}
              onClick={(e) => {
                if (e.target instanceof HTMLElement)
                  setImage(e.target.dataset.img || " ");
              }}
              data-img="Ellipse 7"
              sx={{
                base: {
                  h: "60%",
                },
                sm: {
                  w: "60%",
                },
              }}
              src="/images/Ellipse 7.svg"
              alt="third ellipse"
            ></Image>
            <Image
              className={styles.subImage}
              onClick={(e) => {
                if (e.target instanceof HTMLElement)
                  setImage(e.target.dataset.img || " ");
              }}
              data-img="Ellipse 8"
              sx={{
                base: {
                  h: "60%",
                },
                sm: {
                  w: "60%",
                },
              }}
              src="/images/Ellipse 8.svg"
              alt="fourth ellipse"
            ></Image>
          </Flex>
          <Box maxW="440px" bg={"#201d38"} p={8} borderRadius={32}>
            <Flex>
              <Image
                as={motion.img}
                w={{ base: "48px", md: "64px", lg: "76px" }}
                src={`/images/${image}.svg`}
                alt="ellipse"
                mr={4}
              />
              <Box>
                <Heading
                  fontSize={{
                    base: "lg",
                    md: "xl",
                    lg: "2xl",
                  }}
                  sx={{
                    background:
                      "linear-gradient(180deg, #FD8CA2 0%, #DA9A79 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Student
                </Heading>
                <Heading
                  fontSize={{
                    base: "xl",
                    md: "2xl",
                    lg: "3xl",
                  }}
                  color="#784989"
                  mb={4}
                >
                  Skill over score!
                </Heading>
              </Box>
            </Flex>
            <Text
              textAlign={"justify"}
              fontSize={{
                base: "xs",
                md: "sm",
                lg: "md",
              }}
            >
              Find the best possible opportunities and people available around
              you complimenting your skillset;
              Internships/Start&#8209;ups/Competitions/Hackathons/research
              opportunities and more! To unlock the full potential of every
              student, it is crucial that we carefully nurture their unique
              abilities and lead them towards the right opportunities where they
              can flourish.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
