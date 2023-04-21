import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lightIsOn: true,
};

export const darkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    toggleLight: (state) => {
      state.lightIsOn = !state.lightIsOn;
    },
  },
});

export const { toggleLight } = darkSlice.actions;
export default darkSlice.reducer;
