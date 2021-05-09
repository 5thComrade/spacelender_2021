import { createSlice } from "@reduxjs/toolkit";

const initialResultsState = {
  results: [],
  highToLow: false,
};

const resultsSlice = createSlice({
  name: "results",
  initialState: initialResultsState,
  reducers: {
    updateResults(state, action) {
      state.results = action.payload;
    },
    updateSort(state) {
      state.highToLow = !state.highToLow;
    },
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice;
