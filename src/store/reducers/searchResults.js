import { createSlice } from "@reduxjs/toolkit";

const initialResultsState = {
  results: [],
};

const resultsSlice = createSlice({
  name: "results",
  initialState: initialResultsState,
  reducers: {
    updateResults(state, action) {
      state.results = action.payload;
    },
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice;
