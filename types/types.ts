export interface CreateOpportunityForm {
  position: string;
  company: string;
  contentTitle: string;
  contentBody: string;
  skills: [{ id: string; text: string }];
  link: string;
}

export interface User {
  googleId: string;
  email: string;
  name: string;
}

export interface Opportunity extends CreateOpportunityForm {
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
