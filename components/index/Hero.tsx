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
      h="100vh"
      color="white"
      bg="radial-gradient(78.27% 114.34% at 60.01% 112.56%, rgba(11, 11, 11, 0.7) 0%, rgba(89, 89, 89, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(96.28% 96.28% at 115.6% 50%, rgba(222, 233, 50, 0.7) 0%, rgba(59, 89, 202, 0.126) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(105.87% 105.87% at 4.16% 5.34%, rgba(237, 59, 40, 0.7) 0%, rgba(154, 84, 224, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #0038E5;"
      position={"relative"}
      zIndex={"0"}
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
              maxW={600}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
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
                fontSize={"md"}
                w="200px"
                h="50px"
                sx={{
                  background:
                    "radial-gradient(100% 359.18% at 0% 0%, #6DE3E1 0%, #B97CF1 100%) ",
                  borderRadius: "12px",
                  boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.10)",
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
