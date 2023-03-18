import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import books from './books/slice';

export const store = configureStore({
  reducer: {
    books
  },
});

export const useAppDispatch = () => useDispatch();