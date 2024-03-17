// currencySlice.js

import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    selectedCurrency: {},
  },
  reducers: {
    setSelectedCurrency(state, action) {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setSelectedCurrency } = currencySlice.actions;

export default currencySlice.reducer;
