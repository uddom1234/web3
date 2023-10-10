import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    active: false,
    email: '',
  },
  reducers: {
    login(state) {
      state.active = true;
    },
    logout(state) {
      state.active = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;
