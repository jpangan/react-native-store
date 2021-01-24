import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../types";

const initialState: AppState = {};

const appSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.listings };
    },
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
