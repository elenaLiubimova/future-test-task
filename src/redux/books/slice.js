import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./asyncActions";

const initialState = {
  books: {},
  status: 'loading'
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.books = {};
      state.status = 'loading';
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
      console.log(state.books)
      state.status = 'success';
    });

    builder.addCase(fetchBooks.rejected, (state) => {
      state.books = {};
      state.status = 'error';
    });
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;