import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooksStatus',
  async (params) => {
    try {
      const { searchValue, sortingBy, category, startPageIndex } = params;
      const booksData = await axios.get(
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
