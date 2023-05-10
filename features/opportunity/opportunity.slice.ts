import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import opportunityService from "./opportunity.service";
import {
  CreateOpportunityForm,
  Opportunity,
  OpportunitySliceInitialState,
} from "../../types/types";

const initialState: OpportunitySliceInitialState = {
  opportunities: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const fetchOpportunities = createAsyncThunk(
  "opportunity/fetchOpportunities",
  async (_, thunkAPI) => {
    try {
      return await opportunityService.fetchAllOpportunities();
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createOpportunity = createAsyncThunk(
  "opportunity/createOpportunity",
  async (opportunity: CreateOpportunityForm, thunkAPI) => {
    try {
      return await opportunityService.createOpportunity(opportunity);
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const opportunitySlice = createSlice({
  name: "opportunity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOpportunities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOpportunities.fulfilled, (state, { payload }) => {
      state.opportunities = payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(fetchOpportunities.rejected, (state, { payload }) => {
      state.message = payload as string;
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(createOpportunity.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      createOpportunity.fulfilled,
      (state, { payload }: { payload: Opportunity }) => {
        state.opportunities.push(payload);
        state.isLoading = false;
        state.isSuccess = true;
      }
    );
    builder.addCase(createOpportunity.rejected, (state, { payload }) => {
      state.message = payload as string;
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default opportunitySlice.reducer;
