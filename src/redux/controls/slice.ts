import { createSlice } from '@reduxjs/toolkit';
import { Categories, ControlsSliceState, SortingBy } from './types';

const initialState: ControlsSliceState = {
  searchValue: '',
  searchState: false,
  category: Categories.ALL,
  sortingBy: SortingBy.RELEVANCE,
};

const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSearchState(state) {
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
