import { Book } from "../../types/types";

type BooksData = {
  books: Book[];
  totalBooksAmount: number;
}

export type BooksSliceState = {
  booksData: BooksData;
  status: string;
  startPageIndex: string;
  isClearBooks: boolean;
}

export type Books = {
  items: Book[];
  kind: string;
  totalItems: number;
};

export type BooksProps = {
  searchValue: string;
  sortingBy: string;
  category: string;
  startPageIndex: string;
};
