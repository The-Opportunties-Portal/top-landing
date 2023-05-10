import axios from "axios";
import { CreateOpportunityForm } from "../../types/types";

const fetchAllOpportunities = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/opportunity",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createOpportunity = async (opportunity: CreateOpportunityForm) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + "/opportunity",
      opportunity,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const opportunityService = {
  fetchAllOpportunities,
  createOpportunity,
};

export default opportunityService;
