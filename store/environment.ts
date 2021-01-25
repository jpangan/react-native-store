import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../types';

const initialState: AppState = {
  lang: 'en',
};

const appSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.app };
    },
  },
});

export const {
  changeLang,
 } = appSlice.actions;

export default appSlice.reducer;
