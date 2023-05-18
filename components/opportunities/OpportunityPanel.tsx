import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { DomainFilter } from "../create/DomainInput";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { User } from "../../types/types";

function OpportunityPanel({
  user,
  searchQuery,
  setSearchQuery,
  domainFilter,
  setDomainFilter,
}: {
  user: User | null;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  domainFilter: "All" | "Design" | "Tech" | "Management" | "Other";
  setDomainFilter: React.Dispatch<
    React.SetStateAction<"All" | "Design" | "Tech" | "Management" | "Other">
  >;
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
    console.log(newDomain);
  };

  return (
    <VStack>
      <HStack alignItems={"center"} mb={2}>
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
        <Button onClick={handleCreateOpportunity}>Create opportunity</Button>
      </HStack>
      <DomainFilter setDomain={handleDomainFilterChange} />
    </VStack>
  );
}

export default OpportunityPanel;
