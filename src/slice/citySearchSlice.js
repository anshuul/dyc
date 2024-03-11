// citySearchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const citySearchSlice = createSlice({
  name: "citySearch",
  initialState: {
    searchInput: "",
  },
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = citySearchSlice.actions;
export default citySearchSlice.reducer;
