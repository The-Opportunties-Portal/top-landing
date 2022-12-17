import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Users = () => {
  return (
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
              abilities and lead them towards the right opportunities where they
              can flourish.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
