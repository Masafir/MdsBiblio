import { createSelector } from 'reselect';

const selectBooks = state => state.books;

const makeSelectBooks = () =>
  createSelector(
    selectBooks,
    BooksState => BooksState.books,
  );

export { makeSelectBooks };
