import { configureStore } from '@reduxjs/toolkit';
import assetsReducer from '../features/homePage/HomePageSlice';
import dataReducer from '../features/homePage/slice/dataSlice';
import socketConnection from '../features/homePage/slice/socketSlice';

export const store = configureStore({
  reducer: {
    assetsReducer,
    dataReducer,
    socketConnection,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});
