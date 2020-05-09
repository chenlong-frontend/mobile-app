import {
  WORK_SET_LIST,
  WORK_SET_DEPEND_LIST,
  WORK_SET_NODE_LIST
} from '../constants/redux'

const INITIAL_STATE = {
  list: [],
  dependList: [],
  nodeList: []
}

export default function work(state = INITIAL_STATE, action) {
  const data = action.data;
  switch (action.type) {
    case WORK_SET_LIST:
      return {
        ...state,
        list: data || []
      }
      case WORK_SET_DEPEND_LIST:
        return {
          ...state,
          dependList: data || []
        }
        case WORK_SET_NODE_LIST:
          return {
            ...state,
            nodeList: data || []
          }
          default:
            return state
  }
}
