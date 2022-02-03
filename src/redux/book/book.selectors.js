import { createSelector } from 'reselect'

const selectBook = state => state.book

export const selectBestSellers = createSelector(
  [selectBook],
  book => book.books.results
)
