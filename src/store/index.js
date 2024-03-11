// store.js
import { configureStore } from '@reduxjs/toolkit';
import citySearchReducer from '../slice/citySearchSlice';
import categoryReducer from '../slice/categorySlice';

export default configureStore({
  reducer: {
    citySearch: citySearchReducer,
    category: categoryReducer,
  },
});
