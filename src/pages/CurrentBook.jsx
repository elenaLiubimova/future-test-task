import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { selectBooksData } from '../redux/books/selectors';
import { Typography } from '@mui/material';

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
`;

const BookDescription = styled.div``;

const CurrentBook = () => {
  const { currentBook, status } = useSelector(selectBooksData);
  return (
    <Wrapper>
      {status === 'error' && <h2> Failed to fetch data </h2>}
      {status === 'loading' && <h2> Loading... </h2>}
      {status === 'received' && (
        <BookInfo>
          <BookImage src={currentBook.volumeInfo.imageLinks ? currentBook.volumeInfo.imageLinks.thumbnail : ''} />
          <BookDescription>
            <Typography gutterBottom variant="h4" component="h2">
              {}
            </Typography>
            <Typography variant="body2" component="div">
            </Typography>
            <Typography variant="body2" component="div">
            </Typography>
            <Typography variant="body2" component="div">
            </Typography>
          </BookDescription>
        </BookInfo>
      )}
    </Wrapper>
  );
};

export default CurrentBook;
