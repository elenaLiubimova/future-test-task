import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCurrentBook = createAsyncThunk(
  'books/fetchCurrentBookStatus',
  async (id) => {
    const currentBook = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );

    console.log(currentBook);

    return currentBook;
  }
);