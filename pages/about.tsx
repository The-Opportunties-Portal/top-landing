import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/about/About";

const About = () => {
  return (
    <>
      <Flex direction="column" bgColor="#03001E" minH="100vh">
        <Navbar page="ABOUT" />
        <AboutUs />
      </Flex>
    </>
  );
};

export default About;
