// user.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  value: {
    email: string | null;
    photos: string[];  // Ajout de la propriété photos
  };
};

const initialState: UserState = {
  value: { email: null, photos: [] },  // Initialisation de photos à un tableau vide
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },
    updatePhotos: (state, action: PayloadAction<string>) => {  // Ajout de l'action updatePhotos
      state.value.photos.push(action.payload);
    },
  },
});

export const { updateEmail, updatePhotos } = userSlice.actions;  // Exporter updatePhotos
export default userSlice.reducer;
