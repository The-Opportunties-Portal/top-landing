import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/about/About";
import OurTeam from "../components/about/OurTeam";

const About = () => {
  return (
    <Flex direction="column" bgColor="#03001E" minH="100vh">
      <Navbar page="ABOUT" />
      <AboutUs />
      <OurTeam />
    </Flex>
  );
};

export default About;
