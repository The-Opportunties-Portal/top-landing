import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { Box, Flex, VStack } from "@chakra-ui/react";

import { Opportunities } from "../components/index/Opportunities";
import { Network } from "../components/index/Network";
import { Users } from "../components/index/Users";
import { Hero } from "../components/index/Hero";
import { KnowMore } from "../components/index/KnowMore";
import { PodcastsAndBlogs } from "../components/index/PodcastsAndBlogs";
import { Footer } from "../components/index/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex
        h={"100vh"}
        bg="radial-gradient(78.27% 114.34% at 60.01% 112.56%, rgba(11, 11, 11, 0.7) 0%, rgba(89, 89, 89, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(96.28% 96.28% at 115.6% 50%, rgba(222, 233, 50, 0.7) 0%, rgba(59, 89, 202, 0.126) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, radial-gradient(105.87% 105.87% at 4.16% 5.34%, rgba(237, 59, 40, 0.7) 0%, rgba(154, 84, 224, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #0038E5;"
        direction={"column"}
      >
        <Navbar />
        <Hero />
      </Flex>

      {/* <Box
        position={"absolute"}
        transform="-50%"
        w="50vw"
        h={12}
        borderRight={"2px solid rgba(236, 155, 131, 1)"}
      /> */}

      <Opportunities />

      <Network />
      <Users />

      <KnowMore />

      <PodcastsAndBlogs />

      <Footer />
    </>
  );
}
