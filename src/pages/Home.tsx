import { Button } from '@mui/material';
import { useEffect } from 'react';
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
import { noImageUrl, paginationStep } from '../utils/constants';
import { Book } from '../types/types';
import Loading from '../components/Loading';

const Home = () => {
  const dispatch = useAppDispatch();
  const category = useSelector(selectCategory);
  const status = useSelector(selectBooksStatus);
  const books = useSelector(selectBooksData);
  const searchValue = useSelector(selectSearchValue);
  const sortingBy = useSelector(selectSortingBy);
  const searchState = useSelector(selectSearchState);
  const startPageIndex = useSelector(selectStartPageIndex).toString();

  useEffect(() => {
    dispatch(fetchBooks({ searchValue, sortingBy, category, startPageIndex }));
    dispatch(setIsClearBooks(true));
  }, [dispatch, sortingBy, searchState, category, startPageIndex]);

  const renderCards = (booksArray: Book[]) => {
    return booksArray.map(
      (book) =>
        book.volumeInfo && (
          <CardItem
            img={book.volumeInfo.imageLinks?.thumbnail || noImageUrl}
            category={
              book.volumeInfo.categories ? book.volumeInfo.categories[0] : ''
            }
            name={book.volumeInfo.title || ''}
            author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : ' '}
            id={book.id || ''}
            key={book.id}
          />
        )
    );
  };

  const loadNextPage = () => {
    dispatch(setIsClearBooks(false));
    dispatch(setStartPageIndex(paginationStep));
  };

  return (
    <>
      {status === 'error' && (
        <List>
          {books.length === 0 && <h2>Enter title or author of the book</h2>}
          {books.length !== 0 && <h2>Failed to fetch data</h2>}
        </List>
      )}
      {status === 'loading' && <Loading />}
      {status === 'loading' && Number(startPageIndex) !== 0 && (
        <List>{renderCards(books)}</List>
      )}
      {status === 'success' && <List>{renderCards(books)}</List>}
      {books.length > 0 && (
        <Button
          variant="outlined"
          onClick={loadNextPage}
          sx={{ width: '150px', marginTop: '20px' }}
        >
          {status === 'loading' && 'Loading...'}
          {status !== 'loading' && 'Load more'}
        </Button>
      )}
    </>
  );
};

export default Home;
