import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  'books/fetchBooksStatus',
  async () => {
    // const { search } = params;
    const books = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=javascript&key&AIzaSyAkbWtwHTneh1WtIj0lI4-RtWMUnMmSeuU&maxResults=30`
    );

    return books;
  }
);