import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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

      <Box h="100vh" pt={"60px"} color="white" bg="rgba(3, 0, 30, 1)">
        <Heading
          textAlign={"center"}
          mb={32}
          sx={{
            background: "linear-gradient(180deg, #B981CF 0%, #9098CC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Type of Users
        </Heading>
        <Flex justify={"space-around"} align={"center"}>
          <Box className="users">
            <Heading color={"#784989"} textAlign="center">
              Users
            </Heading>
            <Image
              src="/images/Office management-pana (1) 1.svg"
              alt="user making plans"
            ></Image>
          </Box>
          <Flex bg={"#12102c"} borderRadius={32} h="fit-content">
            <Flex
              // height={"100%"}
              direction={"column"}
              justify={"space-around"}
              align={"center"}
              minW="80px"
            >
              <Image
                w="44px"
                src="/images/Ellipse 5.svg"
                alt="first ellipse"
              ></Image>
              <Image
                w="44px"
                src="/images/Ellipse 6.svg"
                alt="second ellipse"
              ></Image>
              <Image
                w="44px"
                src="/images/Ellipse 7.svg"
                alt="third ellipse"
              ></Image>
              <Image
                w="44px"
                src="/images/Ellipse 8.svg"
                alt="fourth ellipse"
              ></Image>
            </Flex>
            <Box maxW="440px" bg={"#201d38"} p={8} borderRadius={32}>
              <Flex>
                <Image src="/images/Ellipse 4.svg" alt="ellipse" mr={4} />
                <Box>
                  <Heading
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
                  <Heading color="#784989">Skill over score!</Heading>
                </Box>
              </Flex>
              <Text>
                Find the best possible opportunities and people available around
                you complimenting your skillset;
                Internships/Start-ups/Competitions/Hackathons/research
                opportunities and more!To unlock the full potential of every
                student, it is crucial that we carefully nurture their unique
                abilities and lead them towards the right opportunities where
                they can flourish.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
