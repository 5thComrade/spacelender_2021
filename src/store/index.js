import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./reducers/searchFor";
import uiSlice from "./reducers/ui";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
