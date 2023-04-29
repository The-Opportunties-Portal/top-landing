import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";

export default function Create() {
  const [formData, setFormData] = useState<{
    position: string;
    company: string;
    contentTitle: string;
    contentBody: string;
    skills: Array<{ id: string; text: string }>;
    link: string;
  }>({
    position: "",
    company: "",
    contentTitle: "",
    contentBody: "",
    skills: [],
    link: "",
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

  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(process.env.NEXT_PUBLIC_API_URL);

    await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/opportunity",
      formData,
      {
        withCredentials: true,
      }
    );

    router.push("/demo");
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
            <FormLabel>Position</FormLabel>
            <Input
              type="text"
              id="position"
              name="position"
              placeholder="Graphic designer at TOP"
              size="lg"
              value={formData.position}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Company</FormLabel>
            <Input
              type="text"
              id="company"
              name="company"
              placeholder="
              The opportunities portal
              "
              size="lg"
              value={formData.company}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Content Title</FormLabel>
            <Input
              type="text"
              id="contentTitle"
              name="contentTitle"
              placeholder="Key responsibilities"
              size="lg"
              value={formData.contentTitle}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Content Body</FormLabel>
            <Textarea
              id="contentBody"
              name="contentBody"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint"
              size="lg"
              value={formData.contentBody}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Skills</FormLabel>
            <ReactTags
              tags={formData.skills}
              delimiters={delimiters}
              handleDelete={handleTagDelete}
              handleAddition={handleTagAddition}
              handleDrag={handleTagDrag}
              inputFieldPosition="bottom"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Link</FormLabel>
            <Input
              type="text"
              id="link"
              name="link"
              placeholder="
              form.google.com/lsakdfsdlk
              "
              size="lg"
              value={formData.link}
              onChange={handleChange}
            />
          </FormControl>
          <Button colorScheme={"blackAlpha"} type="submit" width="full" mt={4}>
            Create
          </Button>
        </VStack>
      </form>
    </VStack>
  );
}
