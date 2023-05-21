import { UserActionTypes } from './user.actions.js'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action ) => {
  console.log(`[Log] [File: redux/user/user.reducer.js] [Function: userReducer] [Action Type: ${action.type}]`)
//   console.log(`[Log] [File: redux/user/user.reducer.js] [Function: userReducer] [UserActionTypes: ${JSON.stringify(UserActionTypes)}]`)
  switch (action.type) {
    case UserActionTypes.USER_FETCH_SUCCEEDED:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionTypes.USER_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer