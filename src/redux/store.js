import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import logger from 'redux-logger'

import rootReducer  from './root-reducer'
import rootSaga from './root-saga'

const middlewares = []

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const sagaMiddleware = createSagaMiddleware()

middlewares.push(sagaMiddleware)

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)
