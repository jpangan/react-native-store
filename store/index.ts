import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";

import app from './app';
import listings from "./listings";
import user from "./user";

const rootReducer = combineReducers({
  app,
  listings,
  user,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export const store = configureStore({
  reducer: rootReducer,
});
