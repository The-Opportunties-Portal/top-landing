import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { DomainFilter } from "../create/DomainInput";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { Hackathon, User } from "../../types/types";
import HackathonFilter from "./HackathonFilter";

function OpportunityPanel({
  user,
  searchQuery,
  setSearchQuery,
  domainFilter,
  setDomainFilter,
  hackathon,
  setHackathon,
}: {
  user: User | null;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  domainFilter: "All" | "Design" | "Tech" | "Management" | "Other";
  setDomainFilter: React.Dispatch<
    React.SetStateAction<"All" | "Design" | "Tech" | "Management" | "Other">
  >;
  hackathon: Hackathon;
  setHackathon: React.Dispatch<React.SetStateAction<Hackathon>>;
}) {
  const router = useRouter();

  const handleCreateOpportunity = () => {
    if (user) {
      router.push("/create");
    } else {
      toast.error("You must be logged in to create an opportunity!", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  };

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleDomainFilterChange = (newDomain: typeof domainFilter) => {
    setDomainFilter(newDomain);
  };

  const handleHackathonChange = (newHackathon: Hackathon) => {
    setHackathon(newHackathon);
  };

  return (
    <VStack gap={1}>
      <Stack
        direction={{ base: "column", sm: "row" }}
        alignItems={"center"}
        mb={2}
      >
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder={`Search...`}
            />
          </InputGroup>
        </Box>
        <Button colorScheme="teal" onClick={handleCreateOpportunity}>
          Create opportunity
        </Button>
      </Stack>
      <DomainFilter setDomain={handleDomainFilterChange} />
      <HackathonFilter
        hackathon={hackathon}
        setHackathon={handleHackathonChange}
      />
    </VStack>
  );
}

export default OpportunityPanel;
