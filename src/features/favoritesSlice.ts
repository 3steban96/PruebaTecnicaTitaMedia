import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritePokemon } from '../types/pokemon';

interface FavoritesState {
  list: FavoritePokemon[];
}

const initialState: FavoritesState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoritePokemon>) => {
      const exists = state.list.find(p => p.id === action.payload.id);
      if (!exists) {
        state.list.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(p => p.id !== action.payload);
    },
    clearFavorites: (state) => {
      state.list = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
