// redux toolkit reducer file

import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from './collectionSlice';

export default configureStore({
  reducer: { collection: collectionReducer },
});
