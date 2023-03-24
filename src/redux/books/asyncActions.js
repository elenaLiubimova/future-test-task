import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  'books/fetchBooksStatus',
  async (params) => {
    
    const { searchValue, sortingBy, category, startIndex } = params;
    const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}${category === 'all' ? '' : '+subject:'+category}&startIndex=${startIndex}&maxResults=30&orderBy=${sortingBy}&key&AIzaSyAkbWtwHTneh1WtIj0lI4-RtWMUnMmSeuU`
    );

    console.log(books);

    return books.data.items;
  }
);