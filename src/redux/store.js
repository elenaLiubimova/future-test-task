import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import books from './books/slice';
import controls from './controls/slice';

export const store = configureStore({
  reducer: {
    books,
    controls
  },
});

export const useAppDispatch = () => useDispatch();