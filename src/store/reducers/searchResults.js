import { createSlice } from "@reduxjs/toolkit";

const initialResultsState = {
  results: [],
  currentAPIBody: {},
  isFilterApplied: false,
  budgetFilterApplied: false,
  priceRange: [],
  typeFilterApplied: false,
  type: "",
  capacityFilterApplied: false,
  capacityRange: [],
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
    updateCapacityFilterApplied(state, action) {
      state.capacityFilterApplied = action.payload;
    },
    updateCapacityRange(state, action) {
      state.capacityRange = action.payload;
    },
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice;
