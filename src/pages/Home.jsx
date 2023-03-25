import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import List from '../components/List';
import { fetchBooks } from '../redux/books/asyncActions';
import {
  selectBooksData,
  selectBooksStatus,
  selectStartPageIndex,
} from '../redux/books/selectors';
import {
  selectCategory,
  selectSearchState,
  selectSearchValue,
  selectSortingBy,
} from '../redux/controls/selectors';
import { setIsClearBooks, setStartPageIndex } from '../redux/books/slice';
import { useAppDispatch } from '../redux/store';
import { paginationStep } from '../utils/constants';

const Home = () => {
  const dispatch = useAppDispatch();
  const category = useSelector(selectCategory);
  const status = useSelector(selectBooksStatus);
  const books = useSelector(selectBooksData);
  const searchValue = useSelector(selectSearchValue);
  const sortingBy = useSelector(selectSortingBy);
  const searchState = useSelector(selectSearchState);
  const startPageIndex = useSelector(selectStartPageIndex);

  useEffect(() => {
    dispatch(fetchBooks({ searchValue, sortingBy, category, startPageIndex }));
    dispatch(setIsClearBooks(true));
  }, [dispatch, sortingBy, searchState, category, startPageIndex]);

  // console.log(books)

  const renderCards = (booksArray) => {
    return booksArray.map((book) => (
      <CardItem
        img={
          book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
        }
        category={
          book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''
        }
        name={book.volumeInfo.title}
        author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : ' '}
        id={book.id}
        key={book.id}
      />
    ));
  };

  const loadNextPage = () => {
    dispatch(setIsClearBooks(false));
    dispatch(setStartPageIndex(paginationStep));
  };

  return (
    <>
      {status === 'error' && (
        <List>
          <h2>
            {' '}
            {books.length === 0
              ? 'Enter the author or title of the book in the search field'
              : 'Failed to fetch data'}{' '}
          </h2>
        </List>
      )}
      {status === 'loading' && (
        <List>
          <h2> Loading... </h2>
        </List>
      )}
      {status === 'success' && <List>{renderCards(books)}</List>}
      {books.length > 0 && (
        <Button variant="outlined" onClick={loadNextPage}>
          Load more
        </Button>
      )}
    </>
  );
};

export default Home;
