import {
  WORK_SET_LIST
} from '../constants/redux'

const INITIAL_STATE = {
  list: []
}

export default function work(state = INITIAL_STATE, action) {
  const data = action.data;
  switch (action.type) {
    case WORK_SET_LIST:
      return {
        ...state,
        list: data
      }
    default:
      return state
  }
}