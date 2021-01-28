import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  PendingAction,
  FulfilledAction,
  RejectedAction,
  RequestStatus,
  UserState
} from '../types';

const initialState: UserState = {
  data: {
    address: {
      number: null,
      street: null,
      city: null,
      zipcode: null,
      geolocation: null
    },
    name: null,
    username: null,
    email: null,
    phone: null
  },
  error: undefined,
  status: RequestStatus.init
};

export const getProfileRequest: any = createAsyncThunk(
  'profile/getProfileRequest',
  () =>
    fetch('https://fakestoreapi.com/users/6')
      .then((resp) => resp.json())
      .then((resp) => resp)
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getProfileRequest.pending]: (state, action: PendingAction<any>) => {
      state.status = RequestStatus.pending;
    },
    [getProfileRequest.fulfilled]: (
      state,
      action: FulfilledAction<any, any>
    ) => {
      state.status = RequestStatus.fulfilled;
      state.data = action.payload;
    },
    [getProfileRequest.rejected]: (state, action: RejectedAction<any>) => {
      state.status = RequestStatus.pending;
    }
  }
});

export const {} = userSlice.actions;

export default userSlice.reducer;
