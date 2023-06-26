import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
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
import { Hackathon, ProfilingForm } from "../types/types";

export default function Create() {
  const [formData, setFormData] = useState<ProfilingForm>({
    firstName: "",
    lastName: "",
    bio: "",
    username: "",
    social: {
      website: "",
      twitter: "",
      linkedin: "",
      github: "",
      dribbble: "",
    },
    education: {
      school: "",
      degree: "",
      field: "",
      startYear: 0,
      endYear: 0,
      grade: "",
    },
    experience: {
      jobTitle: "",
      company: "",
      employmentType: "Full Time",
      startMonth: 0,
      startYear: 0,
      endMonth: 0,
      endYear: 0,
      worksHere: false,
      locationType: "On Site",
      description: "",
    },
    contactDetails: {
      primaryEmail: "",
      showPrimaryEmail: false,
      secondaryEmail: "",
      showSecondaryEmail: false,
      mobileNumber: 0,
      showMobileNumber: false,
    },
    locationDetails: {
      country: "",
      state: "",
      city: "",
    },
  });

  const KeyCodes = {
    comma: 188,
    enter: [13, 9, 66, 61],
  };

  const delimiters = [KeyCodes.comma, ...KeyCodes.enter];

  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSocialChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      social: {
        ...prevState.social,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleEducationChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      education: {
        ...prevState.education,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleExperienceChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      experience: {
        ...prevState.experience,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleContactDetailsChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      contactDetails: {
        ...prevState.contactDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleLocationDetailsChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      locationDetails: {
        ...prevState.locationDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const router = useRouter();
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

    try {
      debugger;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profiling`,
        formData,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }

    setIsCreated(true);
    router.push("/opportunities");
  }

  return (
    <VStack w={"100vw"} p={8}>
      <Heading>Profiling</Heading>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <VStack gap={4} mt={4}>
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              size="lg"
              value={formData.firstName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              size="lg"
              value={formData.lastName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Bio</FormLabel>
            <Textarea
              id="bio"
              name="bio"
              placeholder="The position you are hiring for"
              size="lg"
              value={formData.bio}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Your last name"
              size="lg"
              value={formData.username}
              onChange={handleChange}
              mb={12}
            />
          </FormControl>

          <Heading>Social</Heading>
          <FormControl isRequired>
            <FormLabel>Website</FormLabel>
            <Input
              type="text"
              id="website"
              name="website"
              placeholder="Your last name"
              size="lg"
              value={formData.social.website}
              onChange={handleSocialChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Twitter</FormLabel>
            <Input
              type="text"
              id="twitter"
              name="twitter"
              placeholder="Your last name"
              size="lg"
              value={formData.social.twitter}
              onChange={handleSocialChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>LinkedIn</FormLabel>
            <Input
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Your last name"
              size="lg"
              value={formData.social.linkedin}
              onChange={handleSocialChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Github</FormLabel>
            <Input
              type="text"
              id="github"
              name="github"
              placeholder="Your last name"
              size="lg"
              value={formData.social.github}
              onChange={handleSocialChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Dribbble</FormLabel>
            <Input
              type="text"
              id="dribbble"
              name="dribbble"
              placeholder="Your last name"
              size="lg"
              value={formData.social.dribbble}
              onChange={handleSocialChange}
              mb={12}
            />
          </FormControl>

          {/* Education */}
          <Heading>Education</Heading>
          <FormControl isRequired>
            <FormLabel>School</FormLabel>
            <Input
              type="text"
              id="school"
              name="school"
              placeholder="Your last name"
              size="lg"
              value={formData.education.school}
              onChange={handleEducationChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Degree</FormLabel>
            <Input
              type="text"
              id="degree"
              name="degree"
              placeholder="Your last name"
              size="lg"
              value={formData.education.degree}
              onChange={handleEducationChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Field</FormLabel>
            <Input
              type="text"
              id="field"
              name="field"
              placeholder="Your last name"
              size="lg"
              value={formData.education.field}
              onChange={handleEducationChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Start Year</FormLabel>
            <Input
              type="number"
              id="startYear"
              name="startYear"
              placeholder="Your last name"
              size="lg"
              value={formData.education.startYear}
              onChange={handleEducationChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>End Year</FormLabel>
            <Input
              type="number"
              id="endYear"
              name="endYear"
              placeholder="Your last name"
              size="lg"
              value={formData.education.endYear}
              onChange={handleEducationChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Grade</FormLabel>
            <Input
              type="text"
              id="grade"
              name="grade"
              placeholder="Your last name"
              size="lg"
              value={formData.education.grade}
              onChange={handleEducationChange}
              mb={12}
            />
          </FormControl>

          {/* Experience */}
          <Heading>Experience</Heading>
          <FormControl isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input
              type="text"
              id="jobTitle"
              name="jobTitle"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.jobTitle}
              onChange={handleExperienceChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Company</FormLabel>
            <Input
              type="text"
              id="company"
              name="company"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.company}
              onChange={handleExperienceChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>EmploymentType</FormLabel>
            <Select
              id="employmentType"
              name="employmentType"
              size="lg"
              value={formData.experience.employmentType}
              onChange={handleExperienceChange}
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Freelance">Freelance</option>
              <option value="Internship">Internship</option>
              <option value="Trainee">Trainee</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Start Month</FormLabel>
            <Input
              type="number"
              id="startMonth"
              name="startMonth"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.startMonth}
              onChange={handleExperienceChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Start Year</FormLabel>
            <Input
              type="number"
              id="startYear"
              name="startYear"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.startYear}
              onChange={handleExperienceChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>End Month</FormLabel>
            <Input
              type="number"
              id="endMonth"
              name="endMonth"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.endMonth}
              onChange={handleExperienceChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>End Year</FormLabel>
            <Input
              type="number"
              id="endYear"
              name="endYear"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.endYear}
              onChange={handleExperienceChange}
            />
          </FormControl>
          {/* Checkbox for works here */}
          <FormControl>
            <Checkbox
              id="worksHere"
              name="worksHere"
              isChecked={formData.experience.worksHere}
              onChange={(e: any) => {
                setFormData((prevState) => ({
                  ...prevState,
                  experience: {
                    ...prevState.experience,
                    [e.target.name]: !prevState.experience.worksHere,
                  },
                }));
              }}
            >
              Currently Working Here
            </Checkbox>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Location Type</FormLabel>
            <Select
              id="locationType"
              name="locationType"
              size="lg"
              value={formData.experience.locationType}
              onChange={handleExperienceChange}
            >
              <option value="On Site">On Site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              id="description"
              name="description"
              placeholder="The position you are hiring for"
              size="lg"
              value={formData.experience.description}
              onChange={handleExperienceChange}
            />
          </FormControl>

          {/* Contact Details */}
          <Heading>Contact Details</Heading>
          <FormControl isRequired>
            <FormLabel>Primary Email</FormLabel>
            <Input
              type="email"
              id="primaryEmail"
              name="primaryEmail"
              placeholder="Your last name"
              size="lg"
              value={formData.contactDetails.primaryEmail}
              onChange={handleContactDetailsChange}
            />
          </FormControl>

          <FormControl>
            <Checkbox
              id="showPrimaryEmail"
              name="showPrimaryEmail"
              isChecked={formData.contactDetails.showPrimaryEmail}
              onChange={(e: any) => {
                setFormData((prevState) => ({
                  ...prevState,
                  contactDetails: {
                    ...prevState.contactDetails,
                    [e.target.name]: !prevState.contactDetails.showPrimaryEmail,
                  },
                }));
              }}
            >
              Show on profile
            </Checkbox>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Secondary Email</FormLabel>
            <Input
              type="email"
              id="secondaryEmail"
              name="secondaryEmail"
              placeholder="Your last name"
              size="lg"
              value={formData.contactDetails.secondaryEmail}
              onChange={handleContactDetailsChange}
            />
          </FormControl>

          <FormControl>
            <Checkbox
              id="showSecondaryEmail"
              name="showSecondaryEmail"
              isChecked={formData.contactDetails.showSecondaryEmail}
              onChange={(e: any) => {
                setFormData((prevState) => ({
                  ...prevState,
                  contactDetails: {
                    ...prevState.contactDetails,
                    [e.target.name]:
                      !prevState.contactDetails.showSecondaryEmail,
                  },
                }));
              }}
            >
              Show on profile
            </Checkbox>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Your last name"
              size="lg"
              value={formData.contactDetails.mobileNumber}
              onChange={handleContactDetailsChange}
            />
          </FormControl>

          <FormControl>
            <Checkbox
              id="showMobileNumber"
              name="showMobileNumber"
              isChecked={formData.contactDetails.showMobileNumber}
              onChange={(e: any) => {
                setFormData((prevState) => ({
                  ...prevState,
                  contactDetails: {
                    ...prevState.contactDetails,
                    [e.target.name]: !prevState.contactDetails.showMobileNumber,
                  },
                }));
              }}
            >
              Show on profile
            </Checkbox>
          </FormControl>

          {/* Location Details */}
          <Heading>Location Details</Heading>
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <Input
              type="text"
              id="country"
              name="country"
              placeholder="Your last name"
              size="lg"
              value={formData.locationDetails.country}
              onChange={handleLocationDetailsChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Input
              type="text"
              id="state"
              name="state"
              placeholder="Your last name"
              size="lg"
              value={formData.locationDetails.state}
              onChange={handleLocationDetailsChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              id="city"
              name="city"
              placeholder="Your last name"
              size="lg"
              value={formData.locationDetails.city}
              onChange={handleLocationDetailsChange}
            />
          </FormControl>

          <Button
            colorScheme={"teal"}
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
