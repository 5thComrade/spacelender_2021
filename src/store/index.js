import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./reducers/searchFor";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});

export default store;
