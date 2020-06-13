import Taro from "@tarojs/taro";
import {
  LOGIN_SET_TOKEN,
  LOGIN_SET_USER
} from '../constants/redux'

const INITIAL_STATE = {
  token: null,
  user: {}
}

export default function login(state = INITIAL_STATE, action) {
  const data = action.data;
  switch (action.type) {
    case LOGIN_SET_TOKEN:
      Taro.setStorage({
        key: 'token',
        data: data
      });
      return {
        ...state,
        token: data
      }
      case LOGIN_SET_USER:
        Taro.setStorage({
          key: 'user',
          data: JSON.stringify(data)
        });
        return {
          ...state,
          user: data
        }
        default:
          return state
  }
}
