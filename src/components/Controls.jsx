import { Clear, SearchOutlined } from '@mui/icons-material';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  selectCategory,
  selectSearchValue,
  selectSortingBy,
} from '../redux/controls/selectors';
import { setCategory, setSearchValue, setSortingBy } from '../redux/controls/slice';
import { useAppDispatch } from '../redux/store';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const Controls = () => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(selectSearchValue);
  const sortingBy = useSelector(selectSortingBy);
  const category = useSelector(selectCategory);

  const handleSearch = (evt) => {
    dispatch(setSearchValue(evt.target.value));
  };

  const handleCategorySelect = (category) => {
    dispatch(setCategory(category.target.value));
  };

  const handleSortSelect = (sortingBy) => {
    dispatch(setSortingBy(sortingBy.target.value));
  };

  const onClear = () => {
    dispatch(setSearchValue(''));
  };

  return (
    <Wrapper>
      <OutlinedInput
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end" onClick={onClear}>
            <Clear />
          </InputAdornment>
        }
        placeholder="Search for a book"
        onChange={handleSearch}
        value={searchValue}
        size="small"
      />
      <FormControl sx={{ width: 200 }}>
        <InputLabel>Categories</InputLabel>
        <Select size="small" onChange={handleCategorySelect} value={category}>
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="art">art</MenuItem>
          <MenuItem value="biography">biography</MenuItem>
          <MenuItem value="computers">computers</MenuItem>
          <MenuItem value="history">history</MenuItem>
          <MenuItem value="medical">medical</MenuItem>
          <MenuItem value="poetry">poetry</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: 200 }}>
        <InputLabel>Sorting by</InputLabel>
        <Select size="small" onChange={handleSortSelect} value={sortingBy}>
          <MenuItem value="relevance">relevance</MenuItem>
          <MenuItem value="newest">newest</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
};
