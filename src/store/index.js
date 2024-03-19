// store.js
import { configureStore } from "@reduxjs/toolkit";
import citySearchReducer from "../slice/citySearchSlice";
import authReducer from "../slice/authSlice";
import featuredOfferList2Reducer from "../slice/featuredOfferList2";
import featuredOfferListReducer from "../slice/featuredOfferList";
import currencyReducer from "../slice/currencySlice";
import checkedItemsReducer from "../slice/checkedItemsSlice";
import dateReducer from "../slice/dateSlice";
import priceRangeReducer from "../slice/priceRangeSlice";

export default configureStore({
  reducer: {
    currency: currencyReducer,
    citySearch: citySearchReducer,
    checkedItems: checkedItemsReducer,
    selectedDate: dateReducer,
    selectedPriceRange: priceRangeReducer,
    auth: authReducer,
    featureOfferList2State: featuredOfferList2Reducer,
    featuredOfferListSlice: featuredOfferListReducer,
  },
});
