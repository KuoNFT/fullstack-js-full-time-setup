import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { nickname: null, places: [], markers: [] },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateNickname: (state, action) => {
      state.value.nickname = action.payload;
    },
    addPlace: (state, action) => {
      state.value.places.push(action.payload);  
    },
    removePlace: (state, action) => {
      state.value.places = state.value.places.filter(e => e.name !== action.payload);
    },
    setMarkers: (state, action) => {
      state.value.markers = action.payload;
    },
  },
});

export const { updateNickname, addPlace, removePlace, setMarkers } = userSlice.actions;
export default userSlice.reducer;
