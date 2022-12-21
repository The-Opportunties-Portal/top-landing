import { Box, Center } from "@chakra-ui/react";

const TeamMember = ({
  name,
  title,
  image,
  bio,
}: {
  name: string;
  title: string;
  image: string;
  bio: string;
}) => {
  return (
    <Box
      background={
        "linear-gradient(225deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%), #03001E"
      }
      flexBasis={{
        base: "100%",
        md: "20%",
      }}
      mx={{
        base: "4rem",
        md: "2rem",
      }}
      my={{
        base: "2rem",
      }}
      p="1rem"
    >
      <Center>
        <img src={image} alt={name} />
      </Center>
      <Box
        m="2rem"
        sx={{
          background:
            "linear-gradient(225deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), #03001E",
          boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(15px)",
        }}
        textAlign="center"
        textColor="white"
      >
        <Center>{name}</Center>
        <br />
        {bio}
      </Box>
    </Box>
  );
};

export default TeamMember;
