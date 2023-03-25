import { RootState } from "../store";

export const selectBooksStatus = (state: RootState) => state.books.status;

export const selectTotalBooksAmount = (state: RootState) => state.books.booksData.totalBooksAmount;

export const selectBooksData = (state: RootState) => state.books.booksData.books;

export const selectStartPageIndex = (state: RootState) => state.books.startPageIndex;

export const selectIsClearBooks = (state: RootState) => state.books.isClearBooks;
