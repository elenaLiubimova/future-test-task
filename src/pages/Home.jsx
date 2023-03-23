import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import { Container } from '../components/Container';
import List from '../components/List';
import { fetchBooks } from '../redux/books/asyncActions';
import { selectBooksData, selectBooksStatus } from '../redux/books/selectors';
import { setBooks } from '../redux/books/slice';
import {
  selectCategory,
  selectSearchState,
  selectSearchValue,
  selectSortingBy,
} from '../redux/controls/selectors';
import { selectStartIndex } from '../redux/pagination/selectors';
import { setStartIndex } from '../redux/pagination/slice';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const category = useSelector(selectCategory);
  const status = useSelector(selectBooksStatus);
  const books = useSelector(selectBooksData);
  const searchValue = useSelector(selectSearchValue);
  const sortingBy = useSelector(selectSortingBy);
  const searchState = useSelector(selectSearchState);
  const startIndex = useSelector(selectStartIndex);

  useEffect(() => {
    dispatch(fetchBooks({ searchValue, sortingBy, category, startIndex }));
  }, [dispatch, sortingBy, category, searchState, category, startIndex]);

  console.log(books)

  const renderCards = (booksArray) => {
    return booksArray.map((book) => (
      <CardItem
        img={
          book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
        }
        category={book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''}
        name={book.volumeInfo.title}
        author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}
      />
    ));
  };

  const loadMoreBooks = () => {
    dispatch(setStartIndex(30));
    console.log(books)
    // dispatch(setBooks(books));
  }

  return (
    <>
      {status === 'error' && <List><h2> Failed to fetch data </h2></List>}
      {status === 'loading' && <List><h2> Loading... </h2></List>}
      {status === 'success' && <List>
      {/* {renderCards(books.data.items)} */}
      {renderCards(books)}   
      </List>}
      <Button variant="outlined" onClick={loadMoreBooks}>Load more</Button>
    </>
  );
};

export default Home;
