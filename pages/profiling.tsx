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

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/profiling`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response);
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
              placeholder="Your username name"
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
              placeholder="Link to your website"
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
              placeholder="Your twitter handle"
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
              placeholder="Your linkedIn profile"
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
              placeholder="Your github profile"
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
              placeholder="Your dribbble profile"
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
              placeholder="Your school name"
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
              placeholder="Your latest degree"
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
              placeholder="Your field of study"
              size="lg"
              value={formData.education.field}
              onChange={handleEducationChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Start Year</FormLabel>
            {/* <Input
              type="number"
              id="startYear"
              name="startYear"
              placeholder="Start year of your degree"
              size="lg"
              value={formData.education.startYear}
              onChange={handleEducationChange}
            /> */}
            <Select
              placeholder="Your start year"
              size="lg"
              id="startYear"
              name="startYear"
              value={formData.education.startYear}
              onChange={handleEducationChange}
            >
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2054</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>End Year</FormLabel>
            {/* <Input
              type="number"
              id="endYear"
              name="endYear"
              placeholder="End year of your degree"
              size="lg"
              value={formData.education.endYear}
              onChange={handleEducationChange}
            /> */}
            <Select
              placeholder="Your end year"
              size="lg"
              id="endYear"
              name="endYear"
              value={formData.education.startYear}
              onChange={handleEducationChange}
            >
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2054</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Grade</FormLabel>
            <Input
              type="text"
              id="grade"
              name="grade"
              placeholder="Your grade (GPA)"
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
              placeholder="Your job title"
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
              placeholder="Company name"
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
            {/* <Input
              type="number"
              id="startMonth"
              name="startMonth"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.startMonth}
              onChange={handleExperienceChange}
            /> */}
            <Select
              placeholder="Your start month"
              id="startMonth"
              name="startMonth"
              size="lg"
              value={formData.experience.startMonth}
              onClick={handleExperienceChange}
            >
              <option value="January">January</option>
              <option value="Febuary">Febuary</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Start Year</FormLabel>
            {/* <Input
              type="number"
              id="startYear"
              name="startYear"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.startYear}
              onChange={handleExperienceChange}
            /> */}
            <Select
              placeholder="Your start year"
              size="lg"
              id="startYear"
              name="startYear"
              value={formData.experience.startYear}
              onChange={handleExperienceChange}
            >
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2054</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>End Month</FormLabel>
            {/* <Input
              type="number"
              id="endMonth"
              name="endMonth"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.endMonth}
              onChange={handleExperienceChange}
            /> */}
            <Select
              placeholder="Your end month"
              id="endMonth"
              name="endMonth"
              size="lg"
              value={formData.experience.endMonth}
              onClick={handleExperienceChange}
            >
              <option value="January">January</option>
              <option value="Febuary">Febuary</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>End Year</FormLabel>
            {/* <Input
              type="number"
              id="endYear"
              name="endYear"
              placeholder="Your last name"
              size="lg"
              value={formData.experience.endYear}
              onChange={handleExperienceChange}
            /> */}
            <Select
              placeholder="Your end year"
              size="lg"
              id="endYear"
              name="endYear"
              value={formData.experience.endYear}
              onChange={handleExperienceChange}
            >
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2054</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </Select>
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
              placeholder="Your primary email"
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
              Show primary email
            </Checkbox>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Secondary Email</FormLabel>
            <Input
              type="email"
              id="secondaryEmail"
              name="secondaryEmail"
              placeholder="Your secondary email"
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
              Show secondary email
            </Checkbox>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mobile Number</FormLabel>
            <Input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Your mobile number"
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
              Show mobile number
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
              placeholder="Your country"
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
              placeholder="Your state"
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
              placeholder="Your city"
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
