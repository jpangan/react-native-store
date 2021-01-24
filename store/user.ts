import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { UserState, RequestStatus } from '../types';

const initialState: UserState = {
  data: {},
  error: undefined,
  status: RequestStatus.init,
};

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.user };
    },
  },
});

export const {} = appSlice.actions;

export default appSlice.reducer;
