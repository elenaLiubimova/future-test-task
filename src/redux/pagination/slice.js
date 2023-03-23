import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startIndex: 0
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setStartIndex(state, action) {
      state.startIndex += action.payload;
    }
  },
});

export const { setStartIndex } =
paginationSlice.actions;

export default paginationSlice.reducer;