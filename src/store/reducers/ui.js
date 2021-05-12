import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  showDropNavBar: false,
  isLoading: false,
  highToLow: false,
  filterDisplayed: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    updateShowDropNavBar(state) {
      state.showDropNavBar = !state.showDropNavBar;
    },
    updateIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    updateSort(state) {
      state.highToLow = !state.highToLow;
    },
    updateFilterDisplayed(state) {
      state.filterDisplayed = !state.filterDisplayed;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
