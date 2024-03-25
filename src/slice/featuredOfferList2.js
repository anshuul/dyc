import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const featureOfferList2Slice = createSlice({
  name: "featureOfferList2",
  initialState,
  reducers: {
    setFeatureOfferList2(state, action) {
      return state = action.payload;
    },
    toggleFav(state, action) {
      // return state = action.payload;
      const {index, innerIndex, value} = action.payload
      
      for (let i = 0; i < state.length; i++) {
        if(i=== index){
          state[index].topTenDeals[innerIndex].isFavouriteOffer = value
          
        }
        
      }
    },
  },
});

export const { setFeatureOfferList2, toggleFav } = featureOfferList2Slice.actions;

export default featureOfferList2Slice.reducer;