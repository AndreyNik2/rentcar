import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FavoriteState = {
    list: string[],
}

const initialState: FavoriteState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites(state, action: PayloadAction<string>) {
      if (!state.list.includes(action.payload)) {
        state.list = [...state.list, action.payload]
        console.log(state.list)
      }
      else {
        state.list = state.list.filter(item => item !== action.payload)
        console.log(state.list);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;