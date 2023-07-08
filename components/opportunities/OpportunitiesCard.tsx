import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  UnorderedList,
  ListItem,
  HStack,
  Badge,
  Button,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  VStack,
  Icon,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaShareAlt,
} from "react-icons/fa";

import { User } from "../../types/types";
import { useRouter } from "next/router";

import Linkify from "react-linkify";

export function OpportunitiesCard({
  _id,
  projectName,
  role,
  hackathon,
  description,
  skills,
  link,
  emailAddress,
  phoneNumber,
  user,
}: {
  _id: string;
  projectName: string;
  role: string;
  hackathon: string;
  description: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
  emailAddress: string;
  phoneNumber: string;
  user: User | null;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const sendEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const sendWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const navigateToLink = () => {
    window.open(link, "_blank");
  };

  function handleShare() {
    // Invoke the native share dialog to share link
    if (navigator.share) {
      navigator.share({
        title: "Don't miss this chance!",
        text: `Check out this opportunity: ${role} at ${projectName}\n`,
        url:
          window.location.href.replace(/opportunities\b$/, "") +
          `/opportunity/${_id}`,
      });
    }
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      display={"flex"}
      flexDirection={"column"}
      w={"350px"}
      onClick={() => {
        router.push(`/opportunity/${_id}`);
      }}
      _hover={{
        cursor: "pointer",
        boxShadow: "lg",
        transform: "scale(1.1)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <HStack bg="gray.200" justify={"space-between"} p={4}>
        <Box>
          <Heading size="lg" fontWeight="bold">
            {!hackathon || hackathon == "-" ? role : `${hackathon} - ${role}`}
          </Heading>
          <Text fontSize="xl" color="gray.600">
            {projectName}
          </Text>
        </Box>
        <VStack>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleShare();
            }}
            size={"md"}
            colorScheme={"none"}
            color={"black"}
            _hover={{ color: "green.500" }}
          >
            <Icon boxSize={8} as={FaShareAlt} color={"inherit"} />
          </Button>
        </VStack>
      </HStack>
      <Box p={4} display={"flex"} flexDirection={"column"} flexGrow={1}>
        {/* <Heading size="md">{contentTitle}</Heading> */}
        <Text>
          <Linkify>{description}</Linkify>
        </Text>
      </Box>
      <Box justifySelf={"flex-end"} p={4}>
        <Heading size="md" mt={8}>
          Skills Required
        </Heading>
        <Wrap mt={4} spacing={4}>
          {skills.length == 0 ? (
            <Text>None</Text>
          ) : (
            skills.map((skill, index) => (
              <WrapItem key={index}>
                <Badge colorScheme="blue" p={2} borderRadius={12}>
                  {skill.text}
                </Badge>
              </WrapItem>
            ))
          )}
        </Wrap>
        <Flex mt={8} justify="space-between">
          <Button
            colorScheme="teal"
            disabled={!user}
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }} // Open the modal on click
            width={"100%"}
          >
            {"Apply"}
          </Button>
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered preserveScrollBarGap>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Information</ModalHeader>
          <ModalBody>
            {emailAddress && <Text>Email: {emailAddress}</Text>}
            {phoneNumber && <Text>Phone: {phoneNumber}</Text>}
            <VStack justify="space-between" mt={4}>
              {emailAddress && (
                <Button
                  colorScheme="linkedin"
                  variant={"outline"}
                  onClick={sendEmail}
                  gap={2}
                >
                  <Icon as={FaEnvelope} mr={2} />
                  Send Email
                </Button>
              )}
              {phoneNumber && (
                <Button
                  colorScheme="whatsapp"
                  variant={"outline"}
                  onClick={sendWhatsApp}
                >
                  <Icon as={FaWhatsapp} mr={2} />
                  Message on WhatsApp
                </Button>
              )}
              {link && (
                <Button
                  colorScheme="teal"
                  variant={"outline"}
                  onClick={navigateToLink}
                >
                  <Icon as={FaExternalLinkAlt} mr={2} />
                  Navigate to Link
                </Button>
              )}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" variant={"outline"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
