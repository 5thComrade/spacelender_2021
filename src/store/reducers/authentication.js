import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  firstName: "",
  lastName: "",
  email: "",
  isAuthenticated: false,
  authError: false,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    updateFirstName(state, action) {
      state.firstName = action.payload;
    },
    updateLastName(state, action) {
      state.lastName = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
    updateIsAutheticated(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    updateAuthError(state) {
      state.authError = !state.authError;
    },
    updateErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
