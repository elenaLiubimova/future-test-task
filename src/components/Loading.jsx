import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const LoadingScreen = styled.div`
  position: absolute;
  top: 0;
  bottom: 100%;
  left: 0;
  right: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, .4);
`;

const Loading = () => {
  return (
    <LoadingScreen>
      <CircularProgress />
    </LoadingScreen>
  );
}

export default Loading;