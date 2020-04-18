import {
  USER_SET_INFO
} from '../constants/redux'
import {getUserByToken} from '../api/user'

export function setUserInfoAction (info) {
  return {
    type: USER_SET_INFO,
    data: info
  }
}

export function requestUserInfoAction () {
  return async (dispatch,getState) => {
    const {login: {token}} = getState();
    const data = await getUserByToken({token});
    dispatch(setUserInfoAction(data));
  }
};