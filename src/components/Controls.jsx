// import { Clear, SearchOutlined } from '@mui/icons-material';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
`;

export const Controls = () => {

  return (
    <Wrapper>
      <OutlinedInput
        startAdornment={
          <InputAdornment position="start">
            {/* <SearchOutlined /> */}
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {/* <Clear /> */}
          </InputAdornment>
        }
        placeholder="Search for a book"
        size="small"
      />
      <FormControl sx={{ width: 200 }}>
        <InputLabel >Categories</InputLabel>
        <Select size="small" >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={'art'}>art</MenuItem>
          <MenuItem value={'biography'}>biography</MenuItem>
          <MenuItem value={'computers'}>computers</MenuItem>
          <MenuItem value={'history'}>history</MenuItem>
          <MenuItem value={'medical'}>medical</MenuItem>
          <MenuItem value={'poetry'}>poetry</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200 }}>
      <InputLabel >Sorting by</InputLabel>
        <Select size="small" >
          <MenuItem value="relevance">
            <em>relevance</em>
          </MenuItem>
          <MenuItem value={'newest'}>newest</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
};
