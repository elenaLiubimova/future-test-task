import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import books from './books/slice';
import controls from './controls/slice';
import pagination from './pagination/slice';

export const store = configureStore({
  reducer: {
    books,
    controls,
    pagination
  },
});

export const useAppDispatch = () => useDispatch();