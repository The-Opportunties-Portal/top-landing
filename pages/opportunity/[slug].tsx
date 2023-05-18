import { useRouter } from "next/router";
import opportunityService from "../../features/opportunity/opportunity.service";
import { OpportunityCard } from "../../components/demo/OpportunityCard";
import { RootState, useAppDispatch } from "../../app/store";
import DemoNavbar from "../../components/demo/DemoNavbar";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchUser } from "../../features/auth/user.slice";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { OpportunitySchema } from "../../types/types";

function Opportunity({ slug }: { slug: string }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userSlice = useSelector((state: RootState) => state.user);

  const [opportunity, setOpportunity] = useState<OpportunitySchema | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUserHelper() {
      if (!userSlice.user) {
        await dispatch(fetchUser());
      }
      setIsLoading(true);
      setOpportunity(await opportunityService.fetchOpportunityById(slug));
      setIsLoading(false);
    }

    fetchUserHelper();
  }, [userSlice.user]);

  useEffect(() => {
    if (userSlice.isSuccess && !userSlice.user) {
      toast.error("You have been logged out!", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  }, [userSlice.user]);

  return (
    <Modal
      isOpen={true}
      onClose={() => router.push("/opportunities")}
      isCentered
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        <VStack p={8} gap={4}>
          <DemoNavbar />
          {/* <Heading
            pt={4}
            size={"3xl"}
            textDecoration={"underline"}
            textAlign={"center"}
          >
            Opportunity
          </Heading> */}
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
            {!isLoading ? (
              <OpportunityCard
                key={opportunity?._id as string}
                {...(opportunity as OpportunitySchema)}
                user={userSlice.user}
              />
            ) : (
              <Flex align={"center"}>
                <Spinner size="sm" mr={2} />
                <Text>Loading opportunities</Text>
              </Flex>
            )}
          </SimpleGrid>
        </VStack>
      </ModalContent>
    </Modal>
  );
}

export async function getStaticPaths() {
  const opportunities = await opportunityService.fetchAllOpportunities(); // fetch all opportunities from database
  const paths = opportunities.map((opportunity: OpportunitySchema) => ({
    params: { slug: opportunity._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  return { props: { slug: params.slug } };
}

export default Opportunity;
