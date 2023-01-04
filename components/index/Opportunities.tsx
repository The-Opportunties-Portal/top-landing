import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import NextImage from "next/image";

export const Opportunities = () => {
  return (
    <Flex
      id="opportunities"
      scrollBehavior={"smooth"}
      direction="column"
      minH="100vh"
      pt={{ base: 20, lg: 40 }}
      color="white"
      bg="rgba(3, 0, 30, 1)"
    >
      <Heading
        color={"rgba(154, 153, 165, 1)"}
        w="100%"
        mb={{ base: 2, lg: 8 }}
        textAlign={{
          base: "center",
          sm: "center",
        }}
        fontSize={{
          base: "xl",
          sm: "2xl",
          lg: "3xl",
        }}
        pl={{ base: 8, sm: 4, md: 0 }}
        pr={{ base: 4, sm: 4, md: 0 }}
      >
        Opportunities
      </Heading>
      <Heading
        color={"rgba(235, 154, 133, 1)"}
        fontSize={{
          base: "2xl",
          sm: "3xl",
          lg: "5xl",
        }}
        textAlign={{
          base: "center",
          sm: "center",
        }}
        pl={{ base: 8, sm: 4, md: 0 }}
        pr={{ base: 4, sm: 4, md: 0 }}
        mb={{ base: 4, lg: 10 }}
      >
        Welcome to the world of opportunities
      </Heading>
      <Flex
        grow={1}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
        px={8}
      >
        <Flex
          direction={{
            base: "column",
            lg: "row",
          }}
          gap={{ base: 4, lg: 12 }}
        >
          <motion.div
            initial={{ opacity: 0, x: "-30%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box maxW={500} bg="rgba(30, 26, 26, 1)" p={8} borderRadius={42}>
              <Flex mb={4} justify={"space-between"}>
                <Text
                  alignSelf={"center"}
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight={"bold"}
                  sx={{
                    background:
                      "linear-gradient(180deg, #34C6F7 0%, #99F8D0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Giving an opportunity
                </Text>
                <Box
                  w={{ base: "60px", lg: "120px" }}
                  h={{ base: "60px", lg: "120px" }}
                  position="relative"
                  sx={{ aspectRatio: "1 / 1" }}
                >
                  <NextImage
                    src="/images/GivingOpp.svg"
                    alt="The Opprtunities Portal - Giving an opportunity"
                    fill
                    sizes="(max-width: 0px) 60px, (max-width: 1150px) 120px"
                  />
                </Box>
              </Flex>
              <Text
                fontSize={{
                  base: "sm",
                  md: "md",
                  lg: "lg",
                }}
              >
                Looking for the top talent to make your business a success?
                Register to give an opportunity now!
              </Text>
              <br />
              <Text
                fontSize={{
                  base: "sm",
                  md: "md",
                  lg: "lg",
                }}
              >
                By registering as a Startup, Researcher or Investor, you gain
                access to highly skilled and talented people
              </Text>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "30%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box maxW={500} bg="rgba(30, 26, 26, 1)" p={8} borderRadius={42}>
              <Flex mb={4} justify={"space-between"}>
                <Text
                  alignSelf={"center"}
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight={"bold"}
                  sx={{
                    background:
                      "linear-gradient(180deg, #AA72EF 0%, #C987F2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  Finding an opportunity
                </Text>
                <Box
                  w={{ base: "60px", lg: "120px" }}
                  h={{ base: "60px", lg: "120px" }}
                  position="relative"
                  sx={{ aspectRatio: "1 / 1" }}
                >
                  <NextImage
                    src="/images/TakingOpp.svg"
                    alt="The Opprtunities Portal - Finding an opportunity"
                    fill
                    sizes="(max-width: 0px) 60px, (max-width: 1150px) 120px"
                  />
                </Box>
              </Flex>
              <Text
                fontSize={{
                  base: "sm",
                  md: "md",
                  lg: "lg",
                }}
              >
                Got the skills? Need the opportunity? Register as a STUDENT now!
              </Text>
              <br />
              <Text
                fontSize={{
                  base: "sm",
                  md: "md",
                  lg: "lg",
                }}
              >
                By registering as a student, you gain access to a wide range of
                resources, opportunities and profiles that help you develop your
                skills
              </Text>
            </Box>
          </motion.div>
        </Flex>
      </Flex>
    </Flex>
  );
};
