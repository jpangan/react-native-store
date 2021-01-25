import { createSlice, PayloadAction, createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import {
  ListingsState,
  PendingAction,
  FulfilledAction,
  RejectedAction,
  RequestStatus,
} from "../types";

export const getProductsRequest:any = createAsyncThunk("listings/getProductsRequest", () =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json()).then(res => res)
);

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
    [getProductsRequest.pending]: (state, action: PendingAction<any>) => {
      state.status = RequestStatus.pending;
    },
    [getProductsRequest.fulfilled]:(state, action: FulfilledAction<any, any>) =>{
      console.log("action is fulfilled");
      state.data = action.payload;
      state.status = RequestStatus.fulfilled;
    },
    [getProductsRequest.rejected]: (state, action: RejectedAction<any>) => {
      state.error = action.error;
      state.status = RequestStatus.rejected;
    },
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
