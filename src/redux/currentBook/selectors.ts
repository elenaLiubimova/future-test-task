import { RootState } from "../store";

export const selectCurrentBookData = (state: RootState) => state.currentBook.currentBook;

export const selectCurrentBookStatus = (state: RootState) => state.currentBook.status;