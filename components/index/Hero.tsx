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
      h="100vh"
      pt={"60px"}
      color="white"
      bg="radial-gradient(78.27% 114.34% at 60.01% 112.56%, rgba(11, 11, 11, 0.7) 0%, rgba(89, 89, 89, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(96.28% 96.28% at 115.6% 50%, rgba(222, 233, 50, 0.7) 0%, rgba(59, 89, 202, 0.126) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(105.87% 105.87% at 4.16% 5.34%, rgba(237, 59, 40, 0.7) 0%, rgba(154, 84, 224, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #0038E5;"
      position={"relative"}
      zIndex={"-1"}
    >
      <Flex direction={"column"} h="100%" justify={"center"}>
        <Image
          src={"/images/New employee-amico 1.svg"}
          w="408"
          h="408"
          alt="employees discussing"
          mb={2}
        />
        <Box>
          <VStack textAlign={"center"} spacing={4}>
            <Heading fontSize={"5xl"}>Where talent meets opportunity</Heading>
            <Text
              fontWeight={"bold"}
              fontSize={"lg"}
              color={"rgba(242, 246, 249, 0.6)"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </Text>
            <Flex w={"100%"} justify={"center"} color={"rgba(34, 24, 72, 1)"}>
              <Button
                fontWeight="bold"
                fontSize={"md"}
                w="200px"
                h="50px"
                mr={"40px"}
                bg="radial-gradient(100% 359.18% at 0% 0%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
              >
                Sign up
              </Button>
              <Button
                fontWeight="bold"
                fontSize={"md"}
                w="200px"
                h="50px"
                bg="radial-gradient(100% 359.18% at 0% 0%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%)"
              >
                Early access
              </Button>
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};
