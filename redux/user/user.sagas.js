import { takeLatest, put, all, call } from 'redux-saga/effects'

import { UserActionTypes, userFetchSucceeded, userFetchFailure } from './user.actions'

const dummyAuth = (userId, password) => {
  return new Promise((resolve, reject) => {
    return password === 'xxx'
      ? resolve({ userId, name: 'wakuwaku' })
      : reject({ message: 'dummy auth error' })
  })
}

function* fetchUser({ payload: { userId, password } }) {
  console.log('[Log] [File: redux/user/user.sagas.js] [Function: fetchUser] [Note: Start]')
  try {
    const user = yield dummyAuth(userId, password)
    yield put(userFetchSucceeded(user))
    console.log('[Log] [File: redux/user/user.sagas.js] [Function: fetchUser] [Note: Done userFetchSucceeded]')
  } catch (error) {
    yield put(userFetchFailure(error))
    console.log('[Log] [File: redux/user/user.sagas.js] [Function: fetchUser] [Note: Done userFetchFailure]')
  }
}

function* onUserFetchStart() {
  console.log('[Log] [File: redux/user/user.sagas.js] [Function: onUserFetchStart] [Note: Start]')
  yield takeLatest(UserActionTypes.USER_FETCH_REQUESTED, fetchUser)
  console.log('[Log] [File: redux/user/user.sagas.js] [Function: onUserFetchStart] [Note: Done]')
}

export function* userSagas() {
  console.log('[Log] [File: redux/user/user.sagas.js] [Function: userSagas] [Note: Start]')
  yield all([
    call(onUserFetchStart),
  ])
  console.log('[Log] [File: redux/user/user.sagas.js] [Function: userSagas] [Note: Done]')
}