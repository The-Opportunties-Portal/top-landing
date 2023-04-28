import { Box, Grid, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";

import Navbar from "../components/Navbar";
import { Card } from "../components/demo/Card";

function Demo() {
  const columns = {
    base: 1,
    sm: 1,
    md: 3,
    lg: 4,
    xl: 5,
    "2xl": 6,
  };

  return (
    <VStack minH={"100vh"}>
      <Navbar
        page="index"
        NAV_ITEMS={[
          {
            label: "About us",
            href: "/about",
          },
          {
            label: "Early Access",
            href: "/demo",
          },
          {
            label: "Users",
            href: "#users",
          },
          {
            label: "Podcasts & Blogs",
            href: "#podcastsBlogs",
          },
          {
            label: "Join the team",
            href: "https://29ggsvdxkad.typeform.com/to/ubcZK2t1",
          },
        ]}
      />
      <SimpleGrid
        w={"100%"}
        minChildWidth="300px"
        spacing={12}
        p={12}
        maxW={"1200px"}
        justifyItems={"center"}
      >
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
        <Card
          title="Graphic Designing internship in The opportunity portal"
          company="The opportunity portal"
          responsibilities={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua.",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
            "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
            "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
          ]}
          skills={["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"]}
        />
      </SimpleGrid>
    </VStack>
  );
}

export default Demo;
