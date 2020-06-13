import {
  USER_SET_INFO,
  USER_SET_LIST
} from '../constants/redux'
import {
  getUserByToken,
  getUsers
} from '../api/user'

export function setUserInfoAction(info) {
  return {
    type: USER_SET_INFO,
    data: info
  }
}

export function setUserListAction(list) {
  return {
    type: USER_SET_LIST,
    data: list
  }
}

// 请求用户列表
export function requestGetUsersAction() {
  return async (dispatch) => {
    const data = await getUsers();
    dispatch(setUserListAction(data));
  }
};

// 请求用户信息
export function requestUserInfoAction() {
  return async (dispatch) => {
    const data = await getUserByToken();
    dispatch(setUserInfoAction(data));
    return data;
  }
};
