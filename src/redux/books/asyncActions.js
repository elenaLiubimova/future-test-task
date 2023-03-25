import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  'books/fetchBooksStatus',
async (params) => {
    
    const { searchValue, sortingBy, category, startPageIndex } = params;
    const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}${category === 'all' ? '' : '+subject:'+category}&startIndex=${startPageIndex}&maxResults=30&orderBy=${sortingBy}&key&AIzaSyAkbWtwHTneh1WtIj0lI4-RtWMUnMmSeuU`
    );

    return books.data.items;
  }
);