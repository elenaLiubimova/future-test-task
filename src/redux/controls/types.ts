export enum Categories {
  ALL = 'all',
  ART = 'art',
  BIOGRAPHY = 'biography',
  COMPUTERS = 'computers',
  HISTORY = 'history',
  MEDICAL = 'medical',
  POETRY = 'poetry',
}

export enum SortingBy {
  RELEVANCE = 'relevance',
  NEWEST = 'newest',
}

export type ControlsSliceState = {
  searchValue: string;
  searchState: any;
  category: Categories;
  sortingBy: SortingBy;
}