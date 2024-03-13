// store.js
import { configureStore } from "@reduxjs/toolkit";
import citySearchReducer from "../slice/citySearchSlice";
import categoryReducer from "../slice/categorySlice";
import authReducer from "../slice/authSlice";

export default configureStore({
  reducer: {
    citySearch: citySearchReducer,
    category: categoryReducer,
    auth: authReducer,
  },
});
