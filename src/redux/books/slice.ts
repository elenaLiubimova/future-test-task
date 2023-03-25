import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './asyncActions';
import { BooksSliceState } from './types';

const initialState: BooksSliceState = {
  booksData: {
    books: [],
    totalBooksAmount: 0,
  },
  status: 'loading',
  startPageIndex: '0',
  isClearBooks: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setTotalBooksAmount(state, action) {
      state.booksData.totalBooksAmount = action.payload;
    },
    setStartPageIndex(state, action) {
      state.startPageIndex += action.payload;
    },
    setBooks(state, action) {
      state.booksData.books.push(...action.payload);
      
    },
    clearBooks(state) {
      state.booksData.books = [];
    },
    setIsClearBooks(state, action) {
      state.isClearBooks = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      if (state.isClearBooks) {
        state.booksData.books = [];
      }

      state.status = 'loading';
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.booksData.books.push(...action.payload.items);
      state.booksData.totalBooksAmount = action.payload.totalItems;

      state.status = 'success';
    });

    builder.addCase(fetchBooks.rejected, (state) => {
      state.booksData.books = [];
      state.status = 'error';
    });
  },
});

export const {
  setBooks,
  setTotalBooksAmount,
  setStartPageIndex,
  clearBooks,
  setIsClearBooks,
} = booksSlice.actions;

export default booksSlice.reducer;
