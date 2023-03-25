import { AppBar, Typography } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
  
  return (
    <AppBar
      color="transparent"
      position="static"
      sx={{
        backgroundColor: '#b4ecc7',
      }}
    >
      <Title>
        <Typography variant="h4" align="center" component="h1" sx={{
            padding: '20px 0 10px',
          }}>
          Search for books
        </Typography>
      </Title>
      <Controls />
    </AppBar>
  );
};

export default Header;
