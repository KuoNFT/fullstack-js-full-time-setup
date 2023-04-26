import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity: (state, action) => {
      state.value.push(action.payload);
    },
    removeActivity: (state, action) => {
      state.value = state.value.filter((activity) => activity.name !== action.payload);
    },
    updateActivity: (state, action) => {
      const index = state.value.findIndex((activity) => activity.id === action.payload.id);
      if (index !== -1) {
        state.value[index] = action.payload;
      }
    },
  },
});

export const { addActivity, removeActivity, updateActivity } = activitiesSlice.actions;
export default activitiesSlice.reducer;
