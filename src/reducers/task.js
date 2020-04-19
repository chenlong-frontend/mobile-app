import {
  TASK_SET_START_LIST, TASK_SET_WAIT_LIST, TASK_SET_STAR_LIST
} from '../constants/redux'

const INITIAL_STATE = {
  startList: [],
  waitList: [],
  starList: []
}

export default function task(state = INITIAL_STATE, action) {
  const data = action.data;
  switch (action.type) {
    case TASK_SET_START_LIST:
      return {
        ...state,
        startList: data
      }
    case TASK_SET_WAIT_LIST:
      return {
        ...state,
        waitList: data
      }
    case TASK_SET_STAR_LIST:
      return {
        ...state,
        starList: data
      }
    default:
      return state
  }
}