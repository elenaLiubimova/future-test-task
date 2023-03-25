export const selectBooksStatus = (state) => state.books.status;

export const selectTotalBooksAmount = (state) => state.books.booksData.totalBooksAmount;

export const selectBooksData = (state) => state.books.booksData.books;

export const selectStartPageIndex = (state) => state.books.startPageIndex;

export const selectDisplayedBooks = (state) => state.books.displayedBooks;

export const selectIsClearBooks = (state) => state.books.isClearBooks;
