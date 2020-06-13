import {
  LOGIN_SET_TOKEN,
  LOGIN_SET_USER
} from '../constants/redux'
import {
  login
} from '../api/auth'

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
    } = await login(state.login.user);
    dispatch(setToken(openid));
  }
};

export function loginAction(data) {
  return async () => {
    await login(data);
  }
}
