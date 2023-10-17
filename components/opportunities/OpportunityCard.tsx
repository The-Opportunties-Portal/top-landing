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
  FaShare,
  FaShareAlt,
} from "react-icons/fa";

import { Hackathon, User } from "../../types/types";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";

import Linkify from "react-linkify";

export function OpportunityCard({
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
  hackathon: Hackathon;
  description: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
  emailAddress: string;
  phoneNumber: string;
  user: User | null;
}) {
  const options = { defaultProtocol: "https" };
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
        text: `Check out this opportunity: ${role} at ${projectName}\n\nDescription: ${description}\n\n`,
        url: window.location.href,
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
            onClick={handleShare}
            size={"md"}
            colorScheme={"none"}
            color={"black"}
            _hover={{ color: "green.500" }}
          >
            <Icon boxSize={8} as={FaShareAlt} color={"inherit"} />
          </Button>
        </VStack>
      </HStack>
      <Box
        p={4}
        display={"flex"}
        flexDirection={"column"}
        flexGrow={1}
        maxH={"250px"}
        overflow={"auto"}
      >
        {/* <Heading size="md">{contentTitle}</Heading> */}
        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a
              target="blank"
              href={decoratedHref}
              key={key}
              style={{ color: "blue" }}
            >
              {decoratedText}
            </a>
          )}
        >
          {description}
        </Linkify>
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
      {/* <Flex justify={"center"} onClick={handleShare}>
        <HStack justify={"center"} gap={8} align={"center"} w="100%" p={2}>
          <SocialIcon
            url={`https://www.facebook.com/sharer/sharer.php?u=https%3A//www.theopportunitiesportal.com/opportunity/${_id}`}
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url={`https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20opportunity%20%20https%3A//www.theopportunitiesportal.com/opportunity/${_id}`}
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.theopportunitiesportal.com/opportunity/${_id}&title=&summary=&source="
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/"
            style={{ height: 35, width: 35 }}
          />
        </HStack>
      </Flex> */}
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
