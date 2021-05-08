import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./reducers/searchFor";
import uiSlice from "./reducers/ui";
import authSlice from "./reducers/authentication";
import resultsSlice from "./reducers/searchResults";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    results: resultsSlice.reducer,
  },
});

export default store;
