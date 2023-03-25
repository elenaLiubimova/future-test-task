import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Books, BooksProps } from './types';

export const fetchBooks = createAsyncThunk<Books, BooksProps>(
  'books/fetchBooksStatus',
  async (props) => {
    try {
      const { searchValue, sortingBy, category, startPageIndex } = props;
      const booksData = await axios.get<Books>(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}${
          category === 'all' ? '' : '+subject:' + category
        }&startIndex=${startPageIndex}&maxResults=30&orderBy=${sortingBy}&key&AIzaSyAkbWtwHTneh1WtIj0lI4-RtWMUnMmSeuU`
      );
  
      return booksData.data;
    } catch(error) {
      console.log(error);
    }
  }
);
