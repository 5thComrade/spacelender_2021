import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = {
  occassion: "",
  location: "",
  venue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducers: {
    updateOccassion(state, action) {
      state.occassion = action.payload;
    },
    updateLocation(state, action) {
      state.location = action.payload;
    },
    updateVenue(state, action) {
      state.venue = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
