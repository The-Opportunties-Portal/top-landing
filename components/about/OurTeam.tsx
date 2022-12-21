import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import TeamMember from "./TeamMember";

const TeamData = [
  {
    name: "John Doe",
    title: "CEO",
    image: "/images/member1.svg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ",
  },
  {
    name: "John Doe",
    title: "CEO",
    image: "/images/member1.svg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ",
  },
  {
    name: "John Doe",
    title: "CEO",
    image: "/images/member1.svg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ",
  },
];

const OurTeam = () => {
  return (
    <Box>
      <Center>
        <Heading
          fontSize={{
            base: "3rem",
            md: "4rem",
          }}
          m={{
            base: "1rem",
            md: "2rem",
          }}
          sx={{
            background: "linear-gradient(180deg, #B981CF, #9098CC)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Our Team
        </Heading>
      </Center>
      <Flex
        justify="space-around"
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        {TeamData.map((member) => (
          <TeamMember
            name={member.name}
            title={member.title}
            image={member.image}
            bio={member.bio}
            key={member.name}
          />
        ))}
      </Flex>
      <Flex
        justify="space-around"
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        {TeamData.map((member) => (
          <TeamMember
            name={member.name}
            title={member.title}
            image={member.image}
            bio={member.bio}
            key={member.name}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default OurTeam;
