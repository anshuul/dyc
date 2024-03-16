// store.js
import { configureStore } from "@reduxjs/toolkit";
import citySearchReducer from "../slice/citySearchSlice";
import categoryReducer from "../slice/categorySlice";
import authReducer from "../slice/authSlice";
import featuredOfferList2Reducer from "../slice/featuredOfferList2";
import featuredOfferListReducer  from "../slice/featuredOfferList";
import currencyReducer from "../slice/currencySlice";

export default configureStore({
  reducer: {
    currency: currencyReducer,
    citySearch: citySearchReducer,
    category: categoryReducer,
    auth: authReducer,
    featureOfferList2State:featuredOfferList2Reducer,
    featuredOfferListSlice:featuredOfferListReducer ,
  },
});
