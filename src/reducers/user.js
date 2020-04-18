import {
  USER_SET_INFO
} from '../constants/redux'

const INITIAL_STATE = {
  user: {}
}

export default function user(state = INITIAL_STATE, action) {
  const data = action.data;
  switch (action.type) {
    case USER_SET_INFO:
      return {
        ...state,
        user: data
      }
    default:
      return state
  }
}