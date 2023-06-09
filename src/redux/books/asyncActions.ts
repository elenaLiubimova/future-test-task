import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiKey, baseUrl } from '../../utils/constants';
import { Books, BooksProps } from './types';

export const fetchBooks = createAsyncThunk<Books | string, BooksProps>(
  'books/fetchBooksStatus',
  async (props) => {
    const { searchValue, sortingBy, category, startPageIndex } = props;
    const booksData = await axios.get(
      `${baseUrl}?q=${searchValue}${
        category === 'all' ? '' : '+subject:' + category
      }&startIndex=${startPageIndex}&maxResults=30&orderBy=${sortingBy}&key&${apiKey}`
    );
    return booksData.data;
  }
);
