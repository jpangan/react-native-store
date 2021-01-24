import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ListingsState, RequestStatus } from "../types";

const initialState: ListingsState = {
  data: [],
  error: undefined,
  status: RequestStatus.init,
};

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
