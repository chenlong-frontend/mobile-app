import {
  LOGIN_SET_TOKEN,
  LOGIN_SET_USER
} from '../constants/redux'
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
  console("000000000000000000000")
  return async (dispatch, getState) => {
    const state = getState();
    const {
      openid
    } = await login(state.login.user);
    console.log("--------------------------")
    dispatch(setToken(openid));
    await dispatch(requestUserInfoAction)
  }
};

export function registerAction(data) {
  return async () => {
    console.log("+++++++++++++++++++++++")
    console.log(data);
    await register(data);
  }
}
