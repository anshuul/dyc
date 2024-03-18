// dateSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
  name: "selectedDate",
  initialState: null,
  reducers: {
    setSelectedDate: (state, action) => action.payload,
    resetSelectedDate: () => null,
  },
});

export const { setSelectedDate, resetSelectedDate } = dateSlice.actions;

export const selectSelectedDate = (state) => state.selectedDate;

export default dateSlice.reducer;
