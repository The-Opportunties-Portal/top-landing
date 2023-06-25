import { Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/about/About";
import OurTeam from "../components/about/OurTeam";
import { Footer } from "../components/Footer";

const About = () => {
  return (
    <Flex direction="column" bgColor="#03001E" minH="100vh">
      <Navbar
        page="about"
        NAV_ITEMS={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Early Access",
            href: "/earlyAccess",
          },
          {
            label: "Users",
            href: "/#users",
          },
          {
            label: "Podcasts & Blogs",
            href: "/#podcastsBlogs",
          },
          {
            label: "Join the team",
            href: "https://mzsw9vw3nyl.typeform.com/to/aewFiTGR",
          },
        ]}
      />
      <AboutUs />
      <OurTeam />
      <Footer />
    </Flex>
  );
};

export default About;
