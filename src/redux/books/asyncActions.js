import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  'books/fetchBooksStatus',
  async () => {
    const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&AIzaSyAkbWtwHTneh1WtIj0lI4-RtWMUnMmSeuU`
    );

    return books;
  }
);