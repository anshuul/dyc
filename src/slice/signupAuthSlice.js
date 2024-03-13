// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  email: "",
  mobile: "",
};

const signupAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMobile(state, action) {
      state.mobile = action.payload;
    },
  },
});

export const { setFirstName, setEmail, setMobile } = signupAuthSlice.actions;

export default signupAuthSlice.reducer;
