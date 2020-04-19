import {
  USER_SET_INFO, USER_SET_LIST
} from '../constants/redux'

const INITIAL_STATE = {
  user: {},
  list: []
}

export default function user(state = INITIAL_STATE, action) {
  const data = action.data;
  switch (action.type) {
    case USER_SET_INFO:
      return {
        ...state,
        user: data
      }
    case USER_SET_LIST:
      return {
        ...state,
        list: data
      }
    default:
      return state
  }
}