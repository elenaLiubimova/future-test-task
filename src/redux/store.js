import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import books from './books/slice';
import controls from './controls/slice';
import pagination from './pagination/slice';
import currentBook from './currentBook/slice';

export const store = configureStore({
  reducer: {
    books,
    controls,
    pagination,
    currentBook
  },
});

export const useAppDispatch = () => useDispatch();