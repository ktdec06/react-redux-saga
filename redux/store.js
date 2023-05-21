import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

console.log('[Log] [File: redux/store.js] [Note: Before createSagaMiddleware()]')
const sagaMiddleware = createSagaMiddleware()
const initialState = {}
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)

console.log('[Log] [File: redux/store.js] [Note: Before sagaMiddleware.run(rootSaga)]')
sagaMiddleware.run(rootSaga)

export default store