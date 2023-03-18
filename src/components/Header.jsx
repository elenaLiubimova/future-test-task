import { AppBar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Controls } from './Controls';

const Title = styled(Link).attrs({
  to: '/',
})`
  text-decoration: none;
  flex-grow: 1;
`;

const Header = () => {
  return (
    <AppBar color="transparent" position="static">
      <Title>
        <Typography variant="h4" align="center" component="h1">
          Search for books
        </Typography>
      </Title>
      <Controls />
    </AppBar>
  );
};

export default Header;
