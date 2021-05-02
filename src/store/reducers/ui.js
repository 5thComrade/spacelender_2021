import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  showDropNavBar: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    updateShowDropNavBar(state) {
      state.showDropNavBar = !state.showDropNavBar;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
