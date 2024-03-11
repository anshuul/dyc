import { createSlice } from '@reduxjs/toolkit';

const citySearchSlice = createSlice({
  name: 'citySearch',
  initialState: {
    searchInput: '',
    selectedCity: null,
    countryCityList: [], // Add countryCityList to store the entire list of cities
  },
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    },
    setCountryCityList(state, action) { // Add reducer to set the country city list
      state.countryCityList = action.payload;
    },
  },
});

export const { setSearchInput, setSelectedCity, setCountryCityList } = citySearchSlice.actions;
export default citySearchSlice.reducer;
