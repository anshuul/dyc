import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adult: 1,
  child: 0,
  infant: 0,
  selectedData: "", // Add selectedData here
};

const availabilityDataSlice = createSlice({
  name: "availabilityData",
  initialState,
  reducers: {
    setAdult: (state, action) => {
      state.adult = action.payload;
    },
    setChild: (state, action) => {
      state.child = action.payload;
    },
    setInfant: (state, action) => {
      state.infant = action.payload;
    },
    setSelectedData: (state, action) => {
      // Add this reducer
      state.selectedData = action.payload;
    },
  },
});

export const {
  setAdult,
  setChild,
  setInfant,
  setSelectedData, // Export setSelectedData
} = availabilityDataSlice.actions;
export default availabilityDataSlice.reducer;
