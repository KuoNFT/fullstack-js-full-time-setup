import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isConnected: false,
  username: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isConnected = action.payload.isConnected;
      state.username = action.payload.username;
    },
    logoutUser: (state) => {
      state.isConnected = false;
      state.username = '';
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
