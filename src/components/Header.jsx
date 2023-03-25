import { AppBar, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { selectBooksData, selectTotalBooksAmount } from '../redux/books/selectors';
import { Controls } from './Controls';

const Title = styled(Link).attrs({
  to: '/',
})`
  flex-grow: 1;
  text-decoration: none;
  :visited {
    color: black;
  }
`;

const Header = () => {
  const books = useSelector(selectBooksData);
  const totalBooksAmount = useSelector(selectTotalBooksAmount);
  
  return (
    <AppBar
      color="transparent"
      position="static"
      sx={{
        backgroundColor: '#baedf7',
      }}
    >
      <Title>
        <Typography
          variant="h4"
          align="center"
          component="h1"
          sx={{
            padding: '20px 0 10px',
          }}
        >
          Search for books
        </Typography>
      </Title>
      <Controls />
      <Typography
        variant="body1"
        align="center"
        component="p"
        sx={{
          padding: '10px 0',
          minHeight: '24px'
        }}
      >
        {(books.length > 0) ? `Found ${totalBooksAmount} results` : ' '}
      </Typography>
    </AppBar>
  );
};

export default Header;
