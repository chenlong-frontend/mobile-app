import {
  TASK_SET_START_LIST,
  TASK_SET_WAIT_LIST,
  TASK_SET_STAR_LIST,
  TASK_SET_INS_INFO,
  TASK_SET_ALL_LIST,
  TASK_SET_MAIN_TASK_INFO,
  TASK_SET_META_INFO
} from '../constants/redux'

const INITIAL_STATE = {
  startList: [],
  waitList: [],
  starList: [],
  insInfo: {},
  allList: [],
  metaList: [],
  mainTskInfo: {
    workTemplateVo: {},
    taskDetailDatas: []
  }
}

export default function task(state = INITIAL_STATE, action) {
  const data = action.data;
  switch (action.type) {
    case TASK_SET_START_LIST:
      return {
        ...state,
        startList: data || []
      }
      case TASK_SET_WAIT_LIST:
        return {
          ...state,
          waitList: data || []
        }
        case TASK_SET_STAR_LIST:
          return {
            ...state,
            starList: data || []
          }
          case TASK_SET_INS_INFO:
            return {
              ...state,
              insInfo: data
            }
            case TASK_SET_ALL_LIST:
              return {
                ...state,
                allList: data
              }
              case TASK_SET_MAIN_TASK_INFO:
                return {
                  ...state,
                  mainTskInfo: data
                }
                case TASK_SET_META_INFO:
                  return {
                    ...state,
                    metaList: data
                  }

                default:
                  return state
  }
}
