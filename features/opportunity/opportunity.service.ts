import axios from "axios";
import { CreateOpportunityForm } from "../../types/types";

const fetchAllOpportunities = async () => {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/opportunity",
    {
      withCredentials: true,
    }
  );
  return response.data;
};

const createOpportunity = async (opportunity: CreateOpportunityForm) => {
  const response = await axios.post(
    process.env.NEXT_PUBLIC_API_URL + "/opportunity",
    opportunity,
    {
      withCredentials: true,
    }
  );

  if (response.data.error) {
    throw new Error(response.data.error);
  }

  return response.data;
};

const opportunityService = {
  fetchAllOpportunities,
  createOpportunity,
};

export default opportunityService;
