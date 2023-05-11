export interface CreateOpportunityForm {
  position: string;
  company: string;
  contentTitle: string;
  contentBody: string;
  skills: Array<{ id: string; text: string }>;
  link: string;
}

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
