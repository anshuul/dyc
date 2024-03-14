// store.js
import { configureStore } from "@reduxjs/toolkit";
import citySearchReducer from "../slice/citySearchSlice";
import categoryReducer from "../slice/categorySlice";
import authReducer from "../slice/authSlice";
import featureOfferList2Reducer from "../slice/featuredOfferList2";

export default configureStore({
  reducer: {
    citySearch: citySearchReducer,
    category: categoryReducer,
    auth: authReducer,
    featureOfferList2State:featureOfferList2Reducer
  },
});
