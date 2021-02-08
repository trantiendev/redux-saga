import * as type from '../types'

const initialState = {
  users: [],
  loading: false,
  error: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.messages
      }
  
    default:
      return state;
  }
} 