import Taro from "@tarojs/taro";

const INITIAL_STATE = {
  token: Taro.getStorageSync('token'),
  user: Taro.getStorageSync('user')
}

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    // case ADD:
    //   return {
    //     ...state,
    //     num: state.num + 1
    //   }
    //   case MINUS:
    //     return {
    //       ...state,
    //       num: state.num - 1
    //     }
    default:
      return state
  }
}
