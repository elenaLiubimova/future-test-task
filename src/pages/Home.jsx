import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../components/CardItem';
import List from '../components/List';
import { fetchBooks } from '../redux/books/asyncActions';
import { selectBooksData } from '../redux/books/selectors';
import { useAppDispatch } from '../redux/store';

const Home = () => {
  const dispatch = useAppDispatch();
  const { books, status } = useSelector(selectBooksData);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  status === 'success' && console.log(books.data.items[0].volumeInfo)
  console.log(status)

  const renderCards = () => {
    return (
      <CardItem
        img={books.data.items[0].volumeInfo.imageLinks.smallThumbnail
        }
        category={books.data.items[0].volumeInfo.categories[0]}
        name={books.data.items[0].volumeInfo.authors[0]}
        author={books.data.items[0].volumeInfo.authors[0]}
      />
    )
    // books.map((book) => (
    //   <CardItem
    //     img={book.img}
    //     category={book.category}
    //     name={book.name}
    //     author={book.author}
    //   />
    // ));
  };
  
  
  return (
    <>
      {status === 'error' && <h2> Failed to fetch data </h2>}
      {status === 'loading' && <h2> Loading... </h2>}
      {status === 'success' && 
      <List>{renderCards()}</List>
      // <p>loaded</p>
      }
    </>
  );
}

export default Home;