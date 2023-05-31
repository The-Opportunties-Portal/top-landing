import {
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  UnorderedList,
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
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { Hackathon, User } from "../../types/types";
import { useRouter } from "next/router";
import EditOpportunityModal from "./EditOpportunityModal";
import { useAppDispatch } from "../../app/store";
import { deleteOpportunity } from "../../features/opportunity/opportunity.slice";
import { toast } from "react-toastify";

export function EditOpportunityCard({
  _id,
  projectName,
  role,
  domain,
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
  domain: "Design" | "Tech" | "Management" | "Other";
  hackathon: Hackathon;
  description: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
  emailAddress: string;
  phoneNumber: string;
  user: User | null;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const editModalProps = useDisclosure();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const sendEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const sendWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const navigateToLink = () => {
    window.open(link, "_blank");
  };

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
      <HStack justify={"space-between"} bg="gray.200" p={4}>
        <Box>
          <Heading size="lg" fontWeight="bold">
            {role}
          </Heading>
          <Text fontSize="sm" color="gray.600">
            {projectName}
          </Text>
        </Box>
        <VStack>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              editModalProps.onOpen();
            }}
          >
            <Icon as={FaEdit} boxSize={4} color="gray.500" />
          </Button>
          <Button
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteOpportunity(_id)).then(() => {
                toast.success("Opportunity deleted!", {
                  autoClose: 1000,
                  position: "bottom-right",
                });
              });
            }}
          >
            <Icon as={FaTrash} boxSize={4} color="gray.500" />
          </Button>
        </VStack>
      </HStack>
      <Divider />
      <Box p={4} display={"flex"} flexDirection={"column"} flexGrow={1}>
        {/* <Heading size="md">{contentTitle}</Heading> */}
        <Text>{description}</Text>
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
      <EditOpportunityModal
        isOpen={editModalProps.isOpen}
        onClose={editModalProps.onClose}
        opportunity={{
          _id,
          projectName,
          role,
          domain,
          hackathon,
          description,
          skills,
          link,
          emailAddress,
          phoneNumber,
        }}
      />
    </Box>
  );
}
