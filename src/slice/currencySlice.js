// currencySlice.js

import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencyList: [], // Initialize currencyList as an empty array
    selectedCurrencyKey: "1",
  },
  reducers: {
    setCurrencyList(state, action) {
      state.currencyList = action.payload;
    },
    setSelectedCurrencyKey(state, action) {
      state.selectedCurrencyKey = action.payload;
    },
  },
});

export const { setCurrencyList, setSelectedCurrencyKey } = currencySlice.actions;

export default currencySlice.reducer;
