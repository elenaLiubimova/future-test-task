import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import List from '../components/List';
import { fetchBooks } from '../redux/books/asyncActions';
import { selectBooksData } from '../redux/books/selectors';
import { selectCategory, selectSearchValue, selectSortingBy } from '../redux/controls/selectors';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const { books, status } = useSelector(selectBooksData);
  const category = useSelector(selectCategory);
  const searchValue = useSelector(selectSearchValue);
  const sortingBy = useSelector(selectSortingBy);
  console.log(books)

  useEffect(() => {
    dispatch(fetchBooks({ searchValue, sortingBy }));
  }, [dispatch, searchValue, sortingBy]);

  const renderCards = () => {
    return (books.data.items).filter((book) => (
      book.volumeInfo.categories[0].toLowerCase().includes(category.toLowerCase()) && <CardItem
        img={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''}
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
