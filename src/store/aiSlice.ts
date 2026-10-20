import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AIActivity = {
  tool: string;
  timestamp: string;
};

type AIState = {
  totalRequests: number;
  activities: AIActivity[];
};

const initialState: AIState = {
  totalRequests: 0,
  activities: [],
};

const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {
    addAIRequest: (state, action: PayloadAction<string>) => {
      state.totalRequests += 1;

      state.activities.unshift({
        tool: action.payload,
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const { addAIRequest } = aiSlice.actions;

export default aiSlice.reducer;
