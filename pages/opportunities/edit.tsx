import React, { useEffect, useState } from "react";
import opportunityService from "../../features/opportunity/opportunity.service";
import {
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import DemoNavbar from "../../components/opportunities/DemoNavbar";
import OpportunityPanel from "../../components/opportunities/OpportunityPanel";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Hackathon, Opportunity, OpportunitySchema } from "../../types/types";
import { OpportunitiesCard } from "../../components/opportunities/OpportunitiesCard";
import { useRouter } from "next/router";
import { EditOpportunityCard } from "../../components/opportunities/EditOpportunityCard";

function EditListings() {
  const [opportunities, setOpportunities] = React.useState<Array<Opportunity>>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [domainFilter, setDomainFilter] = useState<
    "All" | "Design" | "Tech" | "Management" | "Other"
  >("All");
  const [hackathon, setHackathon] = useState<Hackathon>("-");

  const userSlice = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const opportunitySlice = useSelector((state: RootState) => state.opportunity);

  useEffect(() => {
    if (!userSlice.user) {
      router.push("/opportunities");
    }

    async function fetchOpportunities() {
      setIsLoading(true);
      const userOpportunities =
        await opportunityService.fetchOpportunitiesByUser();
      setOpportunities(userOpportunities);
      setIsLoading(false);
    }

    fetchOpportunities();
  }, [opportunitySlice.opportunities]);

  let filteredArray = Array.from(
    new Set([
      ...opportunities.filter(
        (opportunity: OpportunitySchema) =>
          opportunity.role.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (domainFilter == "All" ? true : opportunity.domain == domainFilter)
      ),
      ...opportunities.filter(
        (opportunity) =>
          opportunity.skills.some((skill) =>
            skill.text.toLowerCase().includes(searchQuery.toLowerCase())
          ) &&
          (domainFilter == "All" ? true : opportunity.domain == domainFilter)
      ),
    ])
  ).filter((opportunity) => {
    console.log(!opportunity.hackathon, hackathon);
    if (!opportunity.hackathon) {
      return hackathon == "-";
    } else if (opportunity.hackathon == "-") {
      return hackathon == "-";
    } else {
      return hackathon == "-" ? true : opportunity.hackathon == hackathon;
    }
  });

  return (
    <VStack minH={"100vh"} p={8} gap={4}>
      <DemoNavbar onEditPage={true} />
      <Heading
        pt={4}
        size={"3xl"}
        textDecoration={"underline"}
        textAlign={"center"}
      >
        Your listings
      </Heading>

      <OpportunityPanel
        user={userSlice.user}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        domainFilter={domainFilter}
        setDomainFilter={setDomainFilter}
        hackathon={hackathon}
        setHackathon={setHackathon}
      />
      <Heading>Found {filteredArray.length} opportunities</Heading>
      <SimpleGrid
        w={"100%"}
        minChildWidth="300px"
        spacing={12}
        maxW={"1200px"}
        justifyItems={"center"}
        pt={8}
      >
        {!isLoading ? (
          filteredArray.map((opportunity) => (
            <EditOpportunityCard
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

export default EditListings;
