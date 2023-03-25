import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './asyncActions';

const initialState = {
  books: [],
  status: 'loading',
  startPageIndex: 0,
  isClearBooks: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setStartPageIndex(state, action) {
      state.startPageIndex += action.payload;
    },
    setBooks(state, action) {
      state.books.push(...action.payload);
    },
    clearBooks(state) {
      state.books = [];
    },
    setIsClearBooks(state, action) {
      state.isClearBooks = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      if (state.isClearBooks) {
        state.books = [];
      }

      state.status = 'loading';
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books.push(...action.payload);

      state.status = 'success';
    });

    builder.addCase(fetchBooks.rejected, (state) => {
      state.books = [];
      state.status = 'error';
    });
  },
});

export const {
  setBooks,
  setMoreBooks,
  setStartPageIndex,
  clearBooks,
  setIsClearBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
