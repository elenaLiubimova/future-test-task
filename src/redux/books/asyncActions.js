import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  'books/fetchBooksStatus',
  async (params) => {
    
    const { searchValue, sortingBy, category, startIndex } = params;
    const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}+subject:${category === 'all' ? '' : category}&startIndex=${startIndex}&orderBy=${sortingBy}&key&AIzaSyAkbWtwHTneh1WtIj0lI4-RtWMUnMmSeuU&maxResults=30`
    );

    console.log(books);

    return books.data.items;
  }
);