import { createSlice } from '@reduxjs/toolkit';
import { People } from '../../utils/interfaces'; // Import the People interface

const favouritesPeoplesSlice = createSlice({
  name: 'favouritesPeoples',
  initialState: {
    favouritesPeoples: [] as People[],
  },
  reducers: {
    addOrRemovePeopleToFavourites(state, action: { payload: People }) {
      const isAlreadyInFavourites = state.favouritesPeoples.some(
        (person: People) => person.name === action.payload.name
      );

      if (isAlreadyInFavourites) {
        state.favouritesPeoples = state.favouritesPeoples.filter(
          (person: People) => person.name !== action.payload.name
        );
      } else {
        state.favouritesPeoples = [...state.favouritesPeoples, action.payload];
      }
    },
    resetPeopleFavourites(state) {
      state.favouritesPeoples = [];
    }
  },
});

export const {
  addOrRemovePeopleToFavourites,
  resetPeopleFavourites,
} = favouritesPeoplesSlice.actions;
export default favouritesPeoplesSlice.reducer;
