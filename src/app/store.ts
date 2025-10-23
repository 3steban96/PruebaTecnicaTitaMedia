import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favoritesSlice';

const loadFavorites = () => {
  try {
    const serializedState = localStorage.getItem('pokemonFavorites');
    console.log('Loaded favorites from localStorage:', serializedState);
    if (serializedState) {
      const parsedData = JSON.parse(serializedState);
      return {
        favorites: {
          list: Array.isArray(parsedData) ? parsedData : (parsedData.list || [])
        }
      };
    }
  } catch (err) {
    console.error('Error loading favorites:', err);
  }
  return undefined;
};

const saveFavorites = (state: any) => {
  try {
    const favoritesToSave = state.favorites.list;
    console.log('Saving favorites to localStorage:', favoritesToSave);
    localStorage.setItem('pokemonFavorites', JSON.stringify(favoritesToSave));
  } catch (err) {
    console.error('Error saving favorites:', err);
  }
};

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  preloadedState: loadFavorites(),
});

store.subscribe(() => {
  saveFavorites(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;