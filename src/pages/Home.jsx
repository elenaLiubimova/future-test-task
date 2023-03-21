import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import List from '../components/List';
import { fetchBooks } from '../redux/books/asyncActions';
import { selectBooksData } from '../redux/books/selectors';
import {
  selectCategory,
  selectSearchValue,
  selectSortingBy,
} from '../redux/controls/selectors';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const { books, status } = useSelector(selectBooksData);
  const category = useSelector(selectCategory);
  const searchValue = useSelector(selectSearchValue);
  const sortingBy = useSelector(selectSortingBy);

  useEffect(() => {
    dispatch(fetchBooks({ searchValue, sortingBy }));
  }, [dispatch, searchValue, sortingBy, category]);

  const filterBooks = () => {
    const filteredBooks = (books?.data?.items).filter(
      (book) =>
        book.volumeInfo.categories &&
        book.volumeInfo.categories[0]
          .toLowerCase()
          .includes(category.toLowerCase())
    );
    console.log(filteredBooks);
    return filteredBooks;
  };

  const renderCards = (booksArray) => {
    return booksArray.map((book) => (
      <CardItem
        img={
          book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
        }
        category={book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}
        name={book.volumeInfo.title}
        author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : ''}
      />
    ));
  };

  return (
    <>
      {status === 'error' && <h2> Failed to fetch data </h2>}
      {status === 'loading' && <h2> Loading... </h2>}
      {status === 'success' && <List>{category === 'all' ? renderCards(books.data.items) : renderCards(filterBooks())}</List>}
    </>
  );
};

export default Home;
