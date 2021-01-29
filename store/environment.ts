import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../types';
import { I18nManager } from 'react-native';

const initialState: AppState = {
  lang: I18nManager.isRTL ? 'ar' : 'en'
};

const environmentSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    }
  },
  extraReducers: {
  }
});

export const { changeLang } = environmentSlice.actions;

export default environmentSlice.reducer;
