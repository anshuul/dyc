// store.js
import { configureStore } from '@reduxjs/toolkit';
import citySearchReducer from '../slice/citySearchSlice';

export default configureStore({
  reducer: {
    citySearch: citySearchReducer,
  },
});
