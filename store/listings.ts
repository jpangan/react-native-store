import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {
  ListingsState,
  PendingAction,
  FulfilledAction,
  RejectedAction,
  RequestStatus
} from '../types';

export const getProductsRequest: any = createAsyncThunk(
  'listings/getProductsRequest',
  () =>
    fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json())
      .then((resp) => resp)
);

const initialState: ListingsState = {
  data: [],
  error: undefined,
  status: RequestStatus.init,
  page: 0
};

const listingSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    resetPage(state) {
      state.page = 0;
      state.data = [];
    }
  },
  extraReducers: {
    [getProductsRequest.pending]: (state, action: PendingAction<any>) => {
      state.status = RequestStatus.pending;
    },
    [getProductsRequest.fulfilled]: (
      state,
      action: FulfilledAction<any, any>
    ) => {
      state.data = state.data.concat(action.payload);
      state.status = RequestStatus.fulfilled;
      state.page += 1;
    },
    [getProductsRequest.rejected]: (state, action: RejectedAction<any>) => {
      state.error = action.error;
      state.status = RequestStatus.rejected;
    }
  }
});

export const { resetPage } = listingSlice.actions;

export default listingSlice.reducer;
