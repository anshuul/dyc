// categorySlice.js

import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    checkedItems: [],
  },
  reducers: {
    setCheckedItems: (state, action) => {
      state.checkedItems = action.payload;
    },
  },
});

export const { setCheckedItems } = categorySlice.actions;

export const selectCheckedItems = (state) => state.category.checkedItems;

export default categorySlice.reducer;
