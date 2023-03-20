import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: null,
  category: '',
  sortingBy: 'relevance',
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategory(state, action) {
      state.searchValue = action.payload;
    },
    setSortingBy(state, action) {
      state.sortingBy = action.payload;
    },
  },
});

export const { setSearchValue, setCategory, setSortingBy } =
  controlsSlice.actions;

export default controlsSlice.reducer;
