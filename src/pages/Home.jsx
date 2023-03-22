import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import List from '../components/List';
import { fetchBooks } from '../redux/books/asyncActions';
import { selectBooksData, selectBooksStatus } from '../redux/books/selectors';
import {
  selectCategory,
  selectSearchState,
  selectSearchValue,
  selectSortingBy,
} from '../redux/controls/selectors';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const category = useSelector(selectCategory);
  const status = useSelector(selectBooksStatus)
  const books = useSelector((state) => selectBooksData(state, category));
  // const books = useSelector(selectBooksData);
  const searchValue = useSelector(selectSearchValue);
  const sortingBy = useSelector(selectSortingBy);
  const searchState = useSelector(selectSearchState);

  useEffect(() => {
    dispatch(fetchBooks({ searchValue, sortingBy }));
  }, [dispatch, sortingBy, category, searchState]);

  if (books && books.length < 30) {
  }

  console.log(books)
  
  // const filterBooks = () => {
  //   const filteredBooks = (books?.data?.items).filter(
  //     (book) =>
  //       book.volumeInfo.categories &&
  //       book.volumeInfo.categories[0]
  //         .toLowerCase()
  //         .includes(category.toLowerCase())
  //   );
  //   return filteredBooks;
  // };

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

  return (
    <>
      {status === 'error' && searchValue === '' && <h2> Enter the title or author in the search field </h2>}
      {status === 'error' && searchValue !== '' && <h2> Failed to fetch data </h2>}
      {status === 'loading' && <h2> Loading... </h2>}
      {status === 'success' && <List>
      {/* <h2> Loaded... </h2> */}
      {renderCards(books)}  
      </List>}
    </>
  );
};

export default Home;
