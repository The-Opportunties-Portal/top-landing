import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Hero = () => {
  return (
    <Box
      className="hero-panel"
      h="90vh"
      flexGrow={1}
      color="white"
      position={"relative"}
      zIndex={"0"}
      justifySelf={"center"}
    >
      <Flex
        direction={"column"}
        h="100%"
        justify={"center"}
        align={"center"}
        gap={4}
      >
        <Image
          src={"/images/New employee-amico 1.svg"}
          w={{ base: "250px", sm: "300px", md: "350px" }}
          alt="employees discussing"
          mb={2}
        />
        <Box>
          <Flex
            direction={"column"}
            align={"center"}
            textAlign={"center"}
            gap={4}
          >
            <Heading fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }} px={8}>
              Where talent meets opportunity
            </Heading>
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "sm", sm: "lg", md: "xl" }}
              color={"rgba(242, 246, 249, 0.6)"}
              px={8}
              maxW={1000}
            >
              Promoting growth and innovation by directing talented individuals
              towards their desired opportunities present on their campus
              itself! Ensuring that no potential remains untapped.
            </Text>
            <Flex
              w={"100%"}
              mt={8}
              gap={8}
              justify={"center"}
              align={"center"}
              color={"white"}
              direction={{
                base: "column",
                sm: "row",
              }}
            >
              {/* <Button
                fontWeight="bold"
                fontSize={"md"}
                w="200px"
                h="50px"
                sx={{
                  background:
                    "radial-gradient(100% 359.18% at 0% 0%, #A68CCE 0%, #EC938E 100%) ",
                  borderRadius: "12px",
                  boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.10)",
                }}
              >
                Sign up
              </Button> */}
              <Button
                fontWeight="bold"
                fontSize={{ base: "md", lg: "lg" }}
                color="black"
                w="200px"
                h="50px"
                sx={{
                  background: "rgba(255, 255, 255, 1)",
                  borderRadius: "12px",
                  boxShadow: "0px 0px 0px 6px rgba(76, 80, 158, 1)",
                  _hover: {
                    transform: "scale(1.2)",
                  },
                }}
              >
                Early access
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
