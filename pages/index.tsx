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
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

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
                  <Heading color="#784989" mb={4}>
                    Skill over score!
                  </Heading>
                </Box>
              </Flex>
              <Text textAlign={"justify"}>
                Find the best possible opportunities and people available around
                you complimenting your skillset;
                Internships/Start&#8209;ups/Competitions/Hackathons/research
                opportunities and more! To unlock the full potential of every
                student, it is crucial that we carefully nurture their unique
                abilities and lead them towards the right opportunities where
                they can flourish.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box h="100vh" pt={"60px"} color="white" bg="rgba(3, 0, 30, 1)">
        <Flex h="100%" direction={"column"} justify={"center"} align={"center"}>
          <Flex w="100%" justifyContent={"space-around"}>
            <Box>
              <Heading
                maxW={400}
                mb={12}
                color={"rgba(9, 124, 158, 1)"}
                fontSize="4xl"
              >
                Find a circle to work, earn, and network
              </Heading>
              <Text maxW={500} fontSize="large" textAlign={"justify"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
            <Box alignSelf={"center"}>
              <Image
                w={250}
                src="/images/3-circles.svg"
                alt="3 overlapping circles"
              />
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box
        className="opportunities"
        h="100vh"
        pt={"60px"}
        color="white"
        bg="rgba(3, 0, 30, 1)"
      >
        <VStack height={"100%"}>
          <Heading color={"rgba(154, 153, 165, 1)"} mb={8}>
            Opportunities
          </Heading>
          <Heading color={"rgba(235, 154, 133, 1)"} fontSize={"5xl"}>
            Welcome to the world of opportunities
          </Heading>
          <Flex
            flexGrow={"1"}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Flex gap={12}>
              <Box maxW={500} bg="rgba(30, 26, 26, 1)" p={8} borderRadius={42}>
                <Flex mb={4} justify={"space-between"}>
                  <Text
                    alignSelf={"center"}
                    fontSize={"4xl"}
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
                    I want to give
                  </Text>
                  <Image
                    w={120}
                    src="images/Business vision-pana 1.svg"
                    alt="man in the clouds"
                  />
                </Flex>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Box>
              <Box maxW={500} bg="rgba(30, 26, 26, 1)" p={8} borderRadius={42}>
                <Flex mb={4} justify={"space-between"}>
                  <Text
                    alignSelf={"center"}
                    fontSize={"4xl"}
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
                    I want to take
                  </Text>
                  <Image
                    w={120}
                    src="images/Digital nomad-pana 1.svg"
                    alt="man in the clouds"
                  />
                </Flex>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </VStack>
      </Box>

      <Flex h="50vh" direction={"column"} bg={"rgba(30, 30, 30, 1)"}>
        <Heading
          textAlign={"center"}
          mt={8}
          mb={16}
          color={"rgba(242, 246, 249, 1)"}
        >
          Get to know more about our platform
        </Heading>
        <Flex justify={"center"} gap={24}>
          <Box
            w={200}
            h={200}
            bg={"#2B2B2B"}
            sx={{
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
              borderRadius: "45px",
              transform: "rotate(180deg)",
            }}
          ></Box>
          <Box
            w={200}
            h={200}
            bg={"#2B2B2B"}
            sx={{
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
              borderRadius: "45px",
              transform: "rotate(180deg)",
            }}
          ></Box>
          <Box
            w={200}
            h={200}
            bg={"#2B2B2B"}
            sx={{
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
              borderRadius: "45px",
              transform: "rotate(180deg)",
            }}
          ></Box>
        </Flex>
      </Flex>

      <Flex direction={"column"} h={"75vh"} bg="rgba(3, 0, 30, 1)">
        <Flex
          grow={1}
          direction={"column"}
          justify={"center"}
          textAlign={"center"}
        >
          <Text
            mt={8}
            fontWeight={"bold"}
            fontSize={"3xl"}
            color={"rgba(229, 217, 253, 1)"}
          >
            Works
          </Text>
          <Text
            fontWeight={"bold"}
            fontSize={"5xl"}
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
        <Flex grow={2} justify={"center"} gap={16} align={"center"}>
          <Image
            w={400}
            h={300}
            borderRadius={24}
            alt="alskfj"
            src="/images/Rectangle 2462.svg"
          ></Image>
          <Image
            w={400}
            h={300}
            borderRadius={24}
            alt="alskfj"
            src="/images/Rectangle 2463.svg"
          ></Image>
        </Flex>
      </Flex>

      <SimpleGrid
        p={12}
        h={"75vh"}
        columns={2}
        bg={"#1E1E1E"}
        color={"white"}
        overflow="hidden"
      >
        <Box w={400} pl={8}>
          <Heading mb={8}>TOP</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Text>
        </Box>
        <Box w={400} justifySelf={"end "} pr={8}>
          <Heading mb={8}>OTHER LINKS</Heading>
          <HStack spacing={6} w={"100%"}>
            <Text>Community</Text>
            <Text>Hire Talent</Text>
            <Text>Find Work</Text>
            <Text>Events</Text>
          </HStack>
        </Box>
        <Box w={400} pl={8}>
          <Heading mb={8}>COMPANY</Heading>
          <HStack spacing={6}>
            <Text>About</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms & Conditions</Text>
          </HStack>
        </Box>
        <Box w={400} justifySelf={"end "} pr={8}>
          <Heading mb={8}>SOCIAL</Heading>
          <HStack bg={"#121212"} p={4} justify={"space-between"} w="100%">
            <SocialIcon
              url="https://twitter.com/johntony366/"
              fgColor="white"
              bgColor="#292929"
            />
            <SocialIcon
              url="https://instagram.com/john.tony366/"
              fgColor="white"
              bgColor="#292929"
            />
            <SocialIcon
              url="https://www.linkedin.com/johntony366"
              fgColor="white"
              bgColor="#292929"
            />
            <SocialIcon
              url="https://www.youtube.com/channel/UCjOxgxgP5Dhw0iBpaQpX0vA"
              fgColor="white"
              bgColor="#292929"
            />
          </HStack>
        </Box>
        <VStack align={"start"} justify={"end"} spacing={4} pl={8}>
          <Image src="/images/logo.svg" alt="logo"></Image>
          <Text>© 2022, TOP.pvt. All Rights Reserved.</Text>
        </VStack>
      </SimpleGrid>
    </>
  );
}
