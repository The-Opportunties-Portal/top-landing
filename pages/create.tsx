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
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { RootState, useAppDispatch } from "../app/store";
import { createOpportunity } from "../features/opportunity/opportunity.slice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { DomainInput } from "../components/create/DomainInput";

export default function Create() {
  const [formData, setFormData] = useState<{
    projectName: string;
    role: string;
    description: string;
    domain: "Design" | "Tech" | "Management" | "Other";
    skills: Array<{ id: string; text: string }>;
    link: string;
    emailAddress: string;
    phoneNumber: string;
  }>({
    projectName: "",
    role: "",
    description: "",
    domain: "Other",
    skills: [],
    link: "",
    emailAddress: "",
    phoneNumber: "",
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

  const router = useRouter();
  const dispatch = useAppDispatch();
  const opportunitySlice = useSelector((state: RootState) => state.opportunity);
  const [isCreated, setIsCreated] = useState(false);

  useEffect(() => {
    if (opportunitySlice.isError) {
      toast.error("Error creating opportunity!", {
        autoClose: 1000,
        position: "bottom-right",
      });
    } else if (isCreated) {
      toast.success("Opportunity created!", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  }, [isCreated]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await dispatch(createOpportunity(formData));
    setIsCreated(true);
    router.push("/opportunities");
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

    // re-render
    setFormData((oldFormData) => ({
      ...oldFormData,
      skills: newTags,
    }));
  };

  return (
    <VStack w={"100vw"} p={8}>
      <Heading>Create an opportunity</Heading>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <VStack gap={2} mt={4}>
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
            <DomainInput setDomain={setDomain} initialValue={"Other"} />
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
            <FormHelperText>Press enter to add a skill</FormHelperText>
            <ReactTags
              tags={formData.skills}
              delimiters={delimiters}
              handleDelete={handleTagDelete}
              handleAddition={handleTagAddition}
              handleDrag={handleTagDrag}
              inputFieldPosition="bottom"
              placeholder="Adobe Photoshop"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Link to apply</FormLabel>
            <Input
              type="text"
              id="link"
              name="link"
              placeholder="
              https://formlink.com
              "
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
              placeholder="
              contact@yourmail.com
              "
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
          <Button
            colorScheme={"blackAlpha"}
            type="submit"
            width="full"
            mt={4}
            disabled={opportunitySlice.isLoading}
          >
            {opportunitySlice.isLoading ? (
              <Flex align={"center"}>
                <Spinner size="sm" mr={2} />
              </Flex>
            ) : (
              "Create"
            )}
          </Button>
        </VStack>
      </form>
    </VStack>
  );
}
