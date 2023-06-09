import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from '../../utils/constants';

export const fetchCurrentBook = createAsyncThunk(
  'books/fetchCurrentBookStatus',
  async (id: string) => {
    const currentBookData = await axios.get(`${baseUrl}/${id}`);

    return currentBookData.data;
  }
);
