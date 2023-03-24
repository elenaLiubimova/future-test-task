import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useAppDispatch } from '../redux/store';
import {
  selectCurrentBookData,
  selectCurrentBookStatus,
} from '../redux/currentBook/selectors';
import { fetchCurrentBook } from '../redux/currentBook/asyncActions';

const Wrapper = styled.div`
  padding: 20px 0;
`;

const BookInfo = styled.div`
  display: flex;
  padding-top: 40px;
  gap: 40px;
`;

const BookImage = styled.img`
  width: 50%;
  height: 50vh;
  object-fit: contain;
`;

const BookDescription = styled.div``;

const CurrentBook = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const status = useSelector(selectCurrentBookStatus);
  const currentBook = useSelector(selectCurrentBookData);

  useEffect(() => {
    dispatch(fetchCurrentBook(id));
  }, [dispatch, id]);

  console.log(currentBook);

  return (
    <Wrapper>
      {status === 'error' && <h2> Failed to fetch data </h2>}
      {status === 'loading' && <h2> Loading... </h2>}
      {status === 'success' && (
        <BookInfo>
          <BookImage
            src={
              currentBook.data.volumeInfo.imageLinks
                ? currentBook.data.volumeInfo.imageLinks.thumbnail
                : ''
            }
          />
          <BookDescription>
            <Typography gutterBottom variant="body2" component="p">
              {currentBook.data.volumeInfo.categories
                ? currentBook.data.volumeInfo.categories[0]
                : ' '}
            </Typography>
            <Typography variant="h5" component="h2">
              {currentBook.data.volumeInfo.title}
            </Typography>
            <Typography variant="body2" component="p">
              {currentBook.data.volumeInfo.authors
                ? currentBook.data.volumeInfo.authors[0]
                : ' '}
            </Typography>
            <Typography variant="body2" component="div">
              {currentBook.data.volumeInfo.description
                ? currentBook.data.volumeInfo.description
                : ' no description '}
            </Typography>
          </BookDescription>
        </BookInfo>
      )}
    </Wrapper>
  );
};

export default CurrentBook;
