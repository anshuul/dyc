import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "response",
  initialState: {
    data: null,
  },
  reducers: {
    setResponseData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setResponseData } = responseSlice.actions;

export const selectResponseData = (state) => state.xKey.data;

export default responseSlice.reducer;
