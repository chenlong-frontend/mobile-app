import {get} from './request';

export const getUserByToken = (data) => {
  return get('/user/getUserByToken', data);
}

//获取用户信息
export const getUsers = () => {
  return get('/user/getAllUser');
}