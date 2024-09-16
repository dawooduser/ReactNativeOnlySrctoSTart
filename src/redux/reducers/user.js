import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
   name: 'user',
   initialState: {
      auth: false,
      userId: '', userName: '', location: '',
      mobileNumber: '', email: '', token: ''
   },
   reducers: {
      login: (state, action) => ({
         ...state, auth: true, ...action.payload.data
      }),
      logout: (state, action) => ({
         ...state, auth: false,
         userId: '', userName: '', location: '',
         mobileNumber: '', email: '', token: ''
      }),
   },
});

export const { login, logout } = UserSlice.actions;

export default UserSlice.reducer;