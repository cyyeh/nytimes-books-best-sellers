import BookActionTypes from './book.types'

const INITIAL_STATE = {
  books: []
}

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.GET_BEST_SELLING_BOOKS_FINISHED:
      return {
        ...state,
        books: action.payload
      }
    default:
      return state
  }
}

export default bookReducer
