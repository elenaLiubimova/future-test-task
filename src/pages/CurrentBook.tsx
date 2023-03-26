import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useAppDispatch } from '../redux/store';
import {
  selectCurrentBookData,
  selectCurrentBookStatus,
} from '../redux/currentBook/selectors';
import { fetchCurrentBook } from '../redux/currentBook/asyncActions';
import parse from 'html-react-parser';
import { Book } from '../types/types';
import { noImageUrl } from '../utils/constants';

const Wrapper = styled.div`
  padding: 20px 0;
`;

const BookInfo = styled.div`
  display: flex;
  padding-top: 40px;
  gap: 40px;
  @media screen and (max-width: 650px) {
    flex-wrap: wrap;
  }
`;

const BookImage = styled.img`
  width: 270px;
  height: 50vh;
  object-fit: contain;
`;

const BookDescription = styled.div``;

const CurrentBook = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const status = useSelector(selectCurrentBookStatus);
  const currentBook: Book = useSelector(selectCurrentBookData);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentBook(id));
    }
  }, [dispatch, id]);

  return (
    <Wrapper>
      {status === 'error' && <h2> Failed to fetch data </h2>}
      {status === 'loading' && <h2> Loading... </h2>}
      {status === 'success' && currentBook && (
        <BookInfo>
          <BookImage
            src={
              currentBook.volumeInfo?.imageLinks
                ? currentBook.volumeInfo.imageLinks.thumbnail
                : noImageUrl
            }
          />
          <BookDescription>
            <Typography gutterBottom variant="body2" component="p">
              {currentBook.volumeInfo?.categories
                ? currentBook.volumeInfo.categories[0]
                : ' '}
            </Typography>
            <Typography variant="h5" component="h2">
              {currentBook.volumeInfo?.title}
            </Typography>
            <Typography variant="body2" component="p">
              {currentBook.volumeInfo?.authors
                ? currentBook.volumeInfo?.authors[0]
                : ' '}
            </Typography>
            <Typography variant="body2" component="div">
              {currentBook.volumeInfo?.description
                ? parse(currentBook.volumeInfo?.description)
                : ' no description '}
            </Typography>
          </BookDescription>
        </BookInfo>
      )}
    </Wrapper>
  );
};

export default CurrentBook;
