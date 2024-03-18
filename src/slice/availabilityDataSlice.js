// availabilityDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enteredPromoCode: "",
  selectedDate: null,
};

const availabilityDataSlice = createSlice({
  name: "availabilityDataSlice",
  initialState,
  reducers: {
    setEnteredPromoCode: (state, action) => {
      state.enteredPromoCode = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setEnteredPromoCode, setSelectedDate } = availabilityDataSlice.actions;
export default availabilityDataSlice.reducer;