// checkedItemsSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const checkedItemsSlice = createSlice({
  name: "checkedItems",
  initialState: [],
  reducers: {
    setCheckedItems: (state, action) => {
      return action.payload;
    },
    resetCheckedItems: () => {
      return [];
    },
  },
});

export const { setCheckedItems, resetCheckedItems } = checkedItemsSlice.actions;

export const selectCheckedItems = (state) => state.checkedItems;

export default checkedItemsSlice.reducer;
