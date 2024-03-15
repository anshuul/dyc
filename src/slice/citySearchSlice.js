import { createSlice } from "@reduxjs/toolkit";

const loadSelectedCityFromLocalStorage = () => {
  try {
    const serializedCity = localStorage.getItem("selectedCity");
    if (serializedCity === null) {
      return null; // Return null if no city is found in local storage
    }
    return JSON.parse(serializedCity);
  } catch (err) {
    console.error("Error loading selectedCity from local storage:", err);
    return null; // Return null in case of error
  }
};

const citySearchSlice = createSlice({
  name: "citySearch",
  initialState: {
    selectedCity: loadSelectedCityFromLocalStorage(),
  },
  reducers: {
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

export const { setSelectedCity } = citySearchSlice.actions;
export default citySearchSlice.reducer;
