import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentBook } from "./asyncActions";

const initialState = {
  currentBook: null,
  status: 'loading',
};

const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {
    setCurrentBook(state, action) {
      state.currentBook = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCurrentBook.pending, (state) => {
      state.currentBook = null;
      state.status = 'loading';
    });

    builder.addCase(fetchCurrentBook.fulfilled, (state, action) => {
      state.currentBook = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchCurrentBook.rejected, (state) => {
      state.currentBook = null;
      state.status = 'error';
    });
  },
});

export const { setCurrentBook } = currentBookSlice.actions;

export default currentBookSlice.reducer;