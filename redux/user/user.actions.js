export const UserActionTypes = {
    USER_FETCH_REQUESTED: 'USER_FETCH_REQUESTED',
    USER_FETCH_SUCCEEDED: 'USER_FETCH_SUCCEEDED',
    USER_FETCH_FAILURE: 'USER_FETCH_FAILURE',
  }

export const userFetchRequested = (userId, password) => {
  console.log('[Log] [File: redux/user/user.actions.js] [Function: userFetchRequested]')
  return ({
    type: UserActionTypes.USER_FETCH_REQUESTED,
    payload: { userId, password }
  })
}
export const userFetchSucceeded = user => {
  console.log('[Log] [File: redux/user/user.actions.js] [Function: userFetchSucceeded]')
  return ({
    type: UserActionTypes.USER_FETCH_SUCCEEDED,
    payload: user
  })
}
export const userFetchFailure = error => {
  console.log('[Log] [File: redux/user/user.actions.js] [Function: userFetchFailure]')
  return ({
    type: UserActionTypes.USER_FETCH_FAILURE,
    payload: error
  })
}