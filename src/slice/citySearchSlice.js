import { createSlice } from "@reduxjs/toolkit";

const loadSelectedCityFromLocalStorage = () => {
  try {
    let serializedCity = localStorage.getItem("selectedCity");
    if (serializedCity === null || serializedCity === "") {
      // If no city is found in local storage, set a default city object
      const defaultCity = {
        iCityID: "8",
        rCityID: "13668",
        vCityName: "Dubai",
        city_banner:
          "https://travellerpassapp.com/images/citybanner/citybanner16784526811083874723.webp",
        iCountryID: "10",
        gCityID: "89",
        vCityLatitude: "25.204849",
        vCityLongitude: "55.270782",
        isExperiences: "Yes",
        isLifestyle: "Yes",
        isDiscover: "Yes",
        isGlobaltix: "No",
        vCountryName: "UAE",
      };
      // Serialize and store the default city object
      serializedCity = JSON.stringify(defaultCity);
      localStorage.setItem("selectedCity", serializedCity);
      return defaultCity;
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
