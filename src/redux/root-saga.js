import { call, put, takeEvery } from 'redux-saga/effects'
import BookActionTypes from './book/book.types'
import {
  getBestSellingBooksFinished
} from './book/book.actions'
import NYTimesAPIs from '../apis/nytimes'

function* fetchBestSellingBooks(action) {
  try {
    const results = yield call(NYTimesAPIs.fetchBestSellingBooks, action.payload)
    yield put(getBestSellingBooksFinished(results))
  } catch (e) {
    console.log(e)
  }
}

export default function* rootSaga() {
  yield takeEvery(BookActionTypes.GET_BEST_SELLING_BOOKS_REQUESTED, fetchBestSellingBooks)
}
