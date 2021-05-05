import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./reducers/searchFor";
import uiSlice from "./reducers/ui";
import authSlice from "./reducers/authentication";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
