import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const featureOfferList2Slice = createSlice({
  name: "featureOfferList2",
  initialState,
  reducers: {
    setFeatureOfferList2(state, action) {
      return state = action.payload;
    },
  },
});

export const { setFeatureOfferList2 } = featureOfferList2Slice.actions;

export default featureOfferList2Slice.reducer;