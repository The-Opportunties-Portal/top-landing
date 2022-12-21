import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/about/About";
import OurTeam from "../components/about/OurTeam";
import { Footer } from "../components/index/Footer";

const About = () => {
  return (
    <Flex direction="column" bgColor="#03001E" minH="100vh">
      <Navbar page="ABOUT" />
      <AboutUs />
      <OurTeam />
      <Footer />
    </Flex>
  );
};

export default About;
