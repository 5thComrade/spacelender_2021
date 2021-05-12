import { createSlice } from "@reduxjs/toolkit";

const initialResultsState = {
  results: [],
  currentAPIBody: {},
  isFilterApplied: false,
  budgetFilterApplied: false,
  priceRange: [],
  typeFilterApplied: false,
  type: "",
};

const resultsSlice = createSlice({
  name: "results",
  initialState: initialResultsState,
  reducers: {
    updateResults(state, action) {
      state.results = action.payload;
    },
    updateBody(state, action) {
      state.currentAPIBody = action.payload;
    },
    updateFilterApplied(state, action) {
      state.isFilterApplied = action.payload;
    },
    updateBudgetFilterApplied(state, action) {
      state.budgetFilterApplied = action.payload;
    },
    updatePriceRange(state, action) {
      state.priceRange = action.payload;
    },
    updateTypeFilterApplied(state, action) {
      state.typeFilterApplied = action.payload;
    },
    updateType(state, action) {
      state.type = action.payload;
    },
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice;
