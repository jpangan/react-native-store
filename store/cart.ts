import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { UserState, RequestStatus } from '../types';

const initialState: UserState = {
  data: [],
  error: undefined,
  status: RequestStatus.init
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.user };
    }
  }
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
