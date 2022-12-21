import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "../../styles/Users.module.css";
import { usersImageVariant } from "./UserCard";

class User {
  type: String;
  heading: String;
  content: String;

  constructor(type: String, heading: String, content: String) {
    this.type = type;
    this.heading = heading;
    this.content = content;
  }
}

export type UserType = {
  type: String;
  heading: String;
  content: String;
};

export const Users = () => {
  const initialImage = "Ellipse 5";
  const imageClickHandler = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      setImage(e.target.dataset.img || " ");
      switch (e.target.dataset.user) {
        case "student":
          setUser(student);
          break;
        case "startup":
          setUser(startup);
          break;
        case "researcher":
          setUser(researcher);
          break;
        case "fundingInstitution":
          setUser(fundingInstitution);
          break;
        default:
          setUser(student);
      }
    }
  };

  const studentsType = "Students";
  const studentsHeading = "Skill over Score!";
  const studentsContent = `Find the best possible opportunities and people available around you complimenting your skillset; Internships/Start\u{2011}ups/Competitions/Hackathons/research opportunities and more! To unlock the full potential of every student, it is crucial that we carefully nurture their unique abilities and lead them towards the right opportunities where they can flourish.`;

  const startupsType = "Startups";
  const startupsHeading = "Effort over procrastination!";
  const startupsContent =
    "With a single search, you can access a wealth of high\u{2011}quality talent with the specific skillsets you need to succeed. No longer will you have to sift through countless resumes or spend countless hours searching for the perfect candidate. Simply enter your search criteria and let our platform do the rest, connecting you with the finest talent available.";

  const researchersType = "Researchers";
  const researchersHeading = "Find skilled thinkers and innovators!";
  const researchersContent =
    "Uncover a pool of exceptional problem\u{2011}solvers, critical thinkers, and innovative minds with the necessary skills for your research. Our platform connects you with individuals who are not only highly qualified, but also eager to learn, grow, and take on new challenges. With just a few clicks, you can find the perfect team to drive your research forward and unlock new insights and breakthroughs.";

  const fundingInstitutionsType = "Funding Institutions";
  const fundingInstitutionsHeading =
    "The best startups and talents, all in one place!";
  const fundingInstitutionsContent =
    "For funding institutions and inventors, finding a promising startup to invest in is always a hassle. Worry no more, as our platform helps investors find the best and most promising startups, backed by highly talented and quality teams, with just a simple search. By working with the best startups, funding institutions can help cultivate innovation and economic growth and get the right returns.";

  const student = new User(studentsType, studentsHeading, studentsContent);
  const startup = new User(startupsType, startupsHeading, startupsContent);
  const researcher = new User(
    researchersType,
    researchersHeading,
    researchersContent
  );
  const fundingInstitution = new User(
    fundingInstitutionsType,
    fundingInstitutionsHeading,
    fundingInstitutionsContent
  );

  const allUsers = [student, startup, researcher, fundingInstitution];

  const [image, setImage] = useState(initialImage);
  const [user, setUser] = useState(student);

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
      id="users"
      direction="column"
      minH="100vh"
      pt={{ base: "48px", md: "60px" }}
      color="white"
      bg="rgba(3, 0, 30, 1)"
      position={"relative"}
      zIndex={10}
    >
      <Heading
        textAlign={"center"}
        fontSize={{
          base: "xl",
          md: "4xl",
        }}
        mb={{ base: 4, md: 32 }}
        sx={{
          background: "linear-gradient(180deg, #B981CF 0%, #9098CC 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        maxW={{ base: 500, md: 700 }}
        mx="auto"
      >
        Empowering everyone to reach their full potential - one user at a time!
      </Heading>
      <Box
        position={"absolute"}
        top={{ base: 105, md: 160 }}
        w="50vw"
        h={{ base: 12, md: 16 }}
        borderRight={"2px solid rgba(120, 73, 137, 1)"}
      />
      <Box
        position={"absolute"}
        top={{ base: 100, md: 222 }}
        ml="20vw"
        w="30vw"
        h={{ base: 12, md: 24 }}
        borderTop={{ md: "2px solid rgba(120, 73, 137, 1)" }}
        borderLeft={{ md: "2px solid rgba(120, 73, 137, 1)" }}
      />
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        justify={{ base: "start", sm: "start", md: "space-around" }}
        align={"center"}
        flexGrow={1}
        gap={{ sm: 12, md: 0 }}
      >
        <Box className="users" pt={{ base: 12 }}>
          <Heading
            color={"#784989"}
            textAlign="center"
            fontSize={{
              base: "2xl",
              md: "4xl",
            }}
          >
            Users
          </Heading>
          <Image
            key={image}
            as={motion.img}
            exit="exit"
            src={`/images/${image} User.svg`}
            alt="user making plans"
            w={{ base: "300px", md: "400px" }}
            h={{ base: "300px", md: "400px" }}
            variants={usersImageVariant}
            initial="hidden"
            animate="visible"
            mx="auto"
          />
        </Box>
        <Flex>
          <Flex
            w={{ base: "100%", md: "100%" }}
            bg={"#12102c"}
            borderRadius={32}
            direction={{ base: "column", sm: "row" }}
            mx={8}
          ></Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};
