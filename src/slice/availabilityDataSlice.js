import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adult: 1,
  child: 0,
  infant: 0,
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
  },
});

export const { setAdult, setChild, setInfant } = availabilityDataSlice.actions;
export default availabilityDataSlice.reducer;
