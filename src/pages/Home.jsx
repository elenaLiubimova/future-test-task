import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import List from '../components/List';
import { fetchBooks } from '../redux/books/asyncActions';
import { selectBooksData } from '../redux/books/selectors';
import { selectSearchValue } from '../redux/controls/selectors';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const { books, status } = useSelector(selectBooksData);
  const { searchValue } = useSelector(selectSearchValue);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const renderCards = () => {
    return (books.data.items).map((book) => (
      <CardItem
        img={book.volumeInfo.imageLinks.smallThumbnail}
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
      {
        status === 'success' && <List>{renderCards()}</List>
        // <p>loaded</p>
      }
    </>
  );
};

export default Home;
