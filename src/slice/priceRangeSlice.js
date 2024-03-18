// priceRangeSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const priceRangeSlice = createSlice({
  name: "selectedPriceRange",
  initialState: { start: 0, limit: 0 },
  reducers: {
    setSelectedPriceRange: (state, action) => {
      return action.payload;
    },
    resetSelectedPriceRange: () => ({ start: 0, limit: 0 }),
  },
});

export const { setSelectedPriceRange, resetSelectedPriceRange } =
  priceRangeSlice.actions;

export const selectSelectedPriceRange = (state) => state.selectedPriceRange;

export default priceRangeSlice.reducer;
