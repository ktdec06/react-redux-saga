import { all, call } from 'redux-saga/effects'

import { userSagas } from './user/user.sagas'

export default function* rootSaga() {
  console.log('[Log] [File: redux/root-saga.js] [Function: rootSaga] [Note: Start]')
  yield all([call(userSagas)])
  console.log('[Log] [File: redux/root-saga.js] [Function: rootSaga] [Note: Done]')
}