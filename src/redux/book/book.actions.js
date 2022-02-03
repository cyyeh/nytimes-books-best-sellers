import BookActionTypes from './book.types'

export const getBestSellingBooksRequested = year => ({
  type: BookActionTypes.GET_BEST_SELLING_BOOKS_REQUESTED,
  payload: year,
})

export const getBestSellingBooksFinished = payload => ({
  type: BookActionTypes.GET_BEST_SELLING_BOOKS_FINISHED,
  payload,
})
