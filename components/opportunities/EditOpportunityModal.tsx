import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { RootState, useAppDispatch } from "../../app/store";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { DomainInput } from "../create/DomainInput";
import { Hackathon, Opportunity } from "../../types/types";
import { updateOpportunity } from "../../features/opportunity/opportunity.slice";

interface EditOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: Opportunity;
}

export default function EditOpportunityModal({
  isOpen,
  onClose,
  opportunity,
}: EditOpportunityModalProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const opportunitySlice = useSelector((state: RootState) => state.opportunity);
  const [formData, setFormData] = useState<{
    _id: string;
    projectName: string;
    role: string;
    hackathon: Hackathon;
    description: string;
    domain: "Design" | "Tech" | "Management" | "Other";
    skills: Array<{ id: string; text: string }>;
    link: string;
    emailAddress: string;
    phoneNumber: string;
  }>({
    _id: opportunity._id,
    projectName: opportunity.projectName,
    role: opportunity.role,
    hackathon: opportunity.hackathon,
    description: opportunity.description,
    domain: opportunity.domain,
    skills: opportunity.skills,
    link: opportunity.link,
    emailAddress: opportunity.emailAddress,
    phoneNumber: opportunity.phoneNumber,
  });

  const KeyCodes = {
    comma: 188,
    enter: 13,
  };

  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const setDomain = (newValue: typeof formData.domain) => {
    setFormData((prevState) => ({
      ...prevState,
      domain: newValue,
    }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await dispatch(
      updateOpportunity({ opportunityId: opportunity._id, formData })
    );
    toast.success("Opportunity updated!", {
      autoClose: 1000,
      position: "bottom-right",
    });
    onClose();
  }

  const handleTagDelete = (i: number) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      skills: oldFormData.skills.filter((tag, index) => index !== i),
    }));
  };

  const handleTagAddition = (tag: { id: string; text: string }) => {
    setFormData((oldFormData) => ({
      ...oldFormData,
      skills: [...oldFormData.skills, tag],
    }));
  };

  const handleTagDrag = (
    tag: { id: string; text: string },
    currPos: number,
    newPos: number
  ) => {
    const newTags = formData.skills.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setFormData((oldFormData) => ({
      ...oldFormData,
      skills: newTags,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Edit opportunity</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={2}>
              <FormControl isRequired>
                <FormLabel>Project/Company Name</FormLabel>
                <Input
                  type="text"
                  id="projectName"
                  name="projectName"
                  placeholder="The name of your organisation"
                  size="lg"
                  value={formData.projectName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Role</FormLabel>
                <Input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="The position you are hiring for"
                  size="lg"
                  value={formData.role}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Domain</FormLabel>
                <DomainInput
                  setDomain={setDomain}
                  initialValue={opportunity.domain}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Hackathon</FormLabel>
                <FormHelperText mb={2}>
                  Select if this is an opportunity to participate in a hackathon
                </FormHelperText>
                <Select
                  id="hackathon"
                  name="hackathon"
                  size="lg"
                  value={formData.hackathon}
                  onChange={handleChange}
                >
                  <option value={"-"}>-</option>
                  <option value="DEVSOC">DEVSOC 🚀</option>
                  <option value="Ignitia">Ignitia 🔥</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Description of the role"
                  size="lg"
                  value={formData.description}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormHelperText>
                  Press enter/tab to add a skill, use the add button on mobile
                </FormHelperText>
                <InputGroup>
                  <ReactTags
                    id={"tag-input"}
                    tags={formData.skills}
                    delimiters={delimiters}
                    handleDelete={handleTagDelete}
                    handleAddition={handleTagAddition}
                    handleDrag={handleTagDrag}
                    inputFieldPosition="bottom"
                    placeholder="Adobe Photoshop"
                  />
                  <Flex ml={6} alignItems={"end"}>
                    <Button
                      colorScheme="teal"
                      h={"42px"}
                      onClick={(e: any) => {
                        e.preventDefault();
                        const input = document.getElementById(
                          "tag-input"
                        ) as HTMLInputElement;
                        if (input) {
                          handleTagAddition({
                            id: input.value,
                            text: input.value,
                          });
                          input.value = "";
                        }
                      }}
                    >
                      Add
                    </Button>
                  </Flex>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Link to apply</FormLabel>
                <Input
                  type="text"
                  id="link"
                  name="link"
                  placeholder=" https://formlink.com "
                  size="lg"
                  value={formData.link}
                  onChange={handleChange}
                  pattern="https://.*"
                  title="Link must start with https://"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Contact mail</FormLabel>
                <Input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder=" contact@yourmail.com "
                  size="lg"
                  value={formData.emailAddress}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Contact number</FormLabel>
                <InputGroup>
                  <InputLeftAddon>+91</InputLeftAddon>
                  <Input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    pattern="\d{10}"
                    title="Please enter a valid 10 digit phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"blackAlpha"}
              type="submit"
              width="full"
              disabled={opportunitySlice.isLoading}
            >
              {opportunitySlice.isLoading ? (
                <Flex align={"center"}>
                  <Spinner size="sm" mr={2} />
                </Flex>
              ) : (
                "Save Changes"
              )}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
