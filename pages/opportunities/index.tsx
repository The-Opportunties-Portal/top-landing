import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactHTMLElement, useEffect, useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import Cookies from "js-cookie";

import Navbar from "../../components/Navbar";
import { OpportunitiesCard } from "../../components/opportunities/OpportunitiesCard";
import { ChevronRightIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { RootState, useAppDispatch } from "../../app/store";
import { useSelector } from "react-redux";
import { fetchOpportunities } from "../../features/opportunity/opportunity.slice";
import { fetchUser, logoutUser } from "../../features/auth/user.slice";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { OpportunitySchema } from "../../types/types";
import { DomainFilter } from "../../components/create/DomainInput";
import AuthButton from "../../components/opportunities/AuthButton";
import EditOpportunties from "../../components/opportunities/EditOpportunties";
import DemoNavbar from "../../components/opportunities/DemoNavbar";
import OpportunityPanel from "../../components/opportunities/OpportunityPanel";

function Demo() {
  const dispatch = useAppDispatch();
  const userSlice = useSelector((state: RootState) => state.user);
  const opportunitySlice = useSelector((state: RootState) => state.opportunity);
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [domainFilter, setDomainFilter] = useState<
    "All" | "Design" | "Tech" | "Management" | "Other"
  >("All");

  useEffect(() => {
    async function fetchUserHelper() {
      if (!userSlice.user) {
        await dispatch(fetchUser());
      }
      await dispatch(fetchOpportunities());
    }

    fetchUserHelper();
  }, []);

  useEffect(() => {
    if (userSlice.isSuccess && !userSlice.user) {
      toast.error("You have been logged out!", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  }, [userSlice.user]);

  return (
    <VStack minH={"100vh"} p={8} gap={4}>
      <DemoNavbar onEditPage={false} />
      <Heading
        pt={4}
        size={"3xl"}
        textDecoration={"underline"}
        textAlign={"center"}
      >
        Find Opportunities
      </Heading>

      <OpportunityPanel
        user={userSlice.user}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        domainFilter={domainFilter}
        setDomainFilter={setDomainFilter}
      />
      {!userSlice.user && (
        <Text mt={2} color={"red.600"} fontSize={"2xl"}>
          Please login to access contact details
        </Text>
      )}
      <SimpleGrid
        w={"100%"}
        minChildWidth="300px"
        spacing={12}
        maxW={"1200px"}
        justifyItems={"center"}
        pt={8}
      >
        {!opportunitySlice.isLoading ? (
          Array.from(
            new Set([
              ...opportunitySlice.opportunities.filter(
                (opportunity: OpportunitySchema) =>
                  opportunity.role
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) &&
                  (domainFilter == "All"
                    ? true
                    : opportunity.domain == domainFilter)
              ),
              ...opportunitySlice.opportunities.filter(
                (opportunity) =>
                  opportunity.skills.some((skill) =>
                    skill.text.toLowerCase().includes(searchQuery.toLowerCase())
                  ) &&
                  (domainFilter == "All"
                    ? true
                    : opportunity.domain == domainFilter)
              ),
            ])
          ).map((opportunity) => (
            <OpportunitiesCard
              key={opportunity._id}
              {...opportunity}
              user={userSlice.user}
            />
          ))
        ) : (
          <Flex align={"center"}>
            <Spinner size="sm" mr={2} />
            <Text>Loading opportunities</Text>
          </Flex>
        )}
      </SimpleGrid>
    </VStack>
  );
}

export default Demo;
