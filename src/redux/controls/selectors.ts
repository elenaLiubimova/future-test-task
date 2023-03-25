import { RootState } from "../store";

export const selectSearchValue = (state: RootState) => state.controls.searchValue;
export const selectSearchState = (state: RootState) => state.controls.searchState;
export const selectCategory = (state: RootState) => state.controls.category;
export const selectSortingBy = (state: RootState) => state.controls.sortingBy;