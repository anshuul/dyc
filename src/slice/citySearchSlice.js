import { createSlice } from "@reduxjs/toolkit";

const loadSelectedCityFromLocalStorage = () => {
  try {
    const serializedCity = localStorage.getItem("selectedCity");
    if (serializedCity === null) {
      return { vCityName: "", vCountryName: "" };
    }
    return JSON.parse(serializedCity);
  } catch (err) {
    console.error("Error loading selectedCity from local storage:", err);
    return { vCityName: "", vCountryName: "" };
  }
};

const citySearchSlice = createSlice({
  name: "citySearch",
  initialState: {
    searchInput: "",
    selectedCity: loadSelectedCityFromLocalStorage(),
  },
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
      try {
        const serializedCity = JSON.stringify(action.payload);
        localStorage.setItem("selectedCity", serializedCity);
      } catch (err) {
        console.error("Error saving selectedCity to local storage:", err);
      }
    },
  },
});

export const { setSearchInput, setSelectedCity } = citySearchSlice.actions;
export default citySearchSlice.reducer;
