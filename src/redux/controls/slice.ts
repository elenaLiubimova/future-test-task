import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: 'book',
  searchState: false,
  category: 'all',
  sortingBy: 'relevance',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSearchState(state, action) {
      state.searchState = !state.searchState;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSortingBy(state, action) {
      state.sortingBy = action.payload;
    },
  },
});

export const { setSearchValue, setSearchState, setCategory, setSortingBy } =
  controlsSlice.actions;

export default controlsSlice.reducer;
