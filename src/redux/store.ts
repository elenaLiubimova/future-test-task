import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import books from './books/slice';
import controls from './controls/slice';
import currentBook from './currentBook/slice';

export const store = configureStore({
  reducer: {
    books,
    controls,
    currentBook,
  },
});

type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
