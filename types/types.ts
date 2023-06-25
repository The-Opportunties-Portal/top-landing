export interface OpportunitySchema {
  _id: string;
  projectName: string;
  domain: "Design" | "Tech" | "Management" | "Other";
  hackathon: Hackathon;
  role: string;
  description: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
  emailAddress: string;
  phoneNumber: string;
}
export interface CreateOpportunityForm {
  projectName: string;
  role: string;
  domain: "Design" | "Tech" | "Management" | "Other";
  hackathon: Hackathon;
  description: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
  emailAddress: string;
  phoneNumber: string;
}

export type Hackathon = "-" | "DEVSOC" | "Ignitia";
export interface User {
  _id: string;
  googleId: string;
  email: string;
  name: string;
}

export interface Opportunity extends CreateOpportunityForm {
  _id: string;
  emailAddress: string;
}

export interface UserSliceInitialState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface OpportunitySliceInitialState {
  opportunities: Opportunity[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export interface ProfilingForm {
  firstName: string;
  lastName: string;
  bio: string;
  username: string;
  social: {
    website: string;
    twitter: string;
    linkedin: string;
    github: string;
    dribbble: string;
  };
  education: {
    school: string;
    degree: string;
    field: string;
    startYear: number;
    endYear: number;
    grade: string;
  };
  experience: {
    jobTitle: string;
    company: string;
    employmentType: employmentType;
    startMonth: number;
    startYear: number;
    endMonth: number;
    endYear: number;
    worksHere: boolean;
    locationType: locationType;
    description: string;
  };
  contactDetails: {
    primaryEmail: string;
    showPrimaryEmail: boolean;
    secondaryEmail: string;
    showSecondaryEmail: boolean;
    mobileNumber: number;
    showMobileNumber: boolean;
  };
  locationDetails: {
    country: string;
    state: string;
    city: string;
  };
}

export type employmentType =
  | "Full Time"
  | "Part Time"
  | "Self Employed"
  | "Freelance"
  | "Internship"
  | "Trainee";

export type locationType = "On Site" | "Remote" | "Hybrid";
