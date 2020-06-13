import Taro from "@tarojs/taro";
import {
  LOGIN_SET_TOKEN,
  LOGIN_SET_USER
} from '../constants/redux'
import {
  getOpenid
} from '../api/auth'
import {
  register
} from '../api/auth'
import {
  requestUserInfoAction
} from './userAction'

export function setToken(token) {
  return {
    type: LOGIN_SET_TOKEN,
    data: token
  }
}

export function setUserAction(user) {
  return {
    type: LOGIN_SET_USER,
    data: user
  }
}

export function getTokenAction() {
  return async (dispatch, getState) => {
    const state = getState();
    const {
      openid
    } = await getOpenid(state.login.user);
    console.log(openid);
    dispatch(setToken(openid));
    console.log("1111111111111111111")
    const userInfo = await dispatch(requestUserInfoAction())
    if (!userInfo) {
      Taro.navigateTo({
        url: "/pages/login/index"
      });
    }
  }
};

export function registerAction(data) {
  return async () => {
    console.log(data);
    await register(data);
  }
}
