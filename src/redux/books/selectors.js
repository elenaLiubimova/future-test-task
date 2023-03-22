export const selectBooksStatus = (state) => state.books.status;

export const selectBooksData = (state, category) => {
  console.log(state.books.books)
  console.log(category)
  if (category === 'all') {
    return state.books.books.data &&
      state.books.books.data.items;
  } else {
    return (
      state.books.books.data &&
      state.books.books.data.items.filter(
        (book) =>
          book.volumeInfo.categories &&
          book.volumeInfo.categories[0]
            .toLowerCase()
            .includes(category.toLowerCase())
      )
    );
  }
};
