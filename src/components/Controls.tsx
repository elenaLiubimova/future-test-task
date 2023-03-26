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
  selectSearchState,
  selectSearchValue,
  selectSortingBy,
} from '../redux/controls/selectors';
import {
  setCategory,
  setSearchState,
  setSearchValue,
  setSortingBy,
} from '../redux/controls/slice';
import { useAppDispatch } from '../redux/store';

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
`;

export const Controls: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useSelector(selectSearchValue);
  const sortingBy = useSelector(selectSortingBy);
  const category = useSelector(selectCategory);
  const searchState = useSelector(selectSearchState);

  const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(evt.target.value));
  };

  const handleSearchState = () => {
    dispatch(setSearchState(searchState));
  };

  const handleCategorySelect = (category: any) => {
    dispatch(setCategory(category.target.value));
  };

  const handleSortSelect = (sortingBy: any) => {
    dispatch(setSortingBy(sortingBy.target.value));
  };

  const onClear = () => {
    dispatch(setSearchValue(''));
    dispatch(setSearchState(searchState));
  };

  const handlePressEnter = (evt: React.KeyboardEvent) => {
    if(evt.key === 'Enter') {
      dispatch(setSearchState(searchState));
    }
  }

  return (
    <Wrapper>
      <OutlinedInput
        onKeyUp={handlePressEnter}
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined
              onClick={handleSearchState}
              sx={{
                cursor: 'pointer',
              }}
            />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end" onClick={onClear}>
            <Clear
              sx={{
                cursor: 'pointer',
              }}
            />
          </InputAdornment>
        }
        placeholder="Search for a book"
        onChange={handleSearchInput}
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
