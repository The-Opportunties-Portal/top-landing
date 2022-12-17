import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

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
      <Navbar />

      <Hero />

      {/* <Box
        position={"absolute"}
        transform="-50%"
        w="50vw"
        h={12}
        borderRight={"2px solid rgba(236, 155, 131, 1)"}
      /> */}

      <Opportunities />
      <Users />

      <Network />

      <KnowMore />

      <PodcastsAndBlogs />

      <Footer />
    </>
  );
}
