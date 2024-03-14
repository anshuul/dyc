import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const featuredOfferListSlice = createSlice({
  name: "featuredOfferList",
  initialState,
  reducers: {
    setFeaturedOfferList(state, action) {
      return state = action.payload;
    },
  },
});

export const { setFeaturedOfferList } = featuredOfferListSlice.actions;

export default featuredOfferListSlice.reducer;
