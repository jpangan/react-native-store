import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";

import cart from "./cart";
import environment from './environment';
import listings from "./listings";
import user from "./user";

const rootReducer = combineReducers({
  cart,
  environment,
  listings,
  user,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
