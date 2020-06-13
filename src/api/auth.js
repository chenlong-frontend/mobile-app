import {
  post,get
} from './request';

export const register = (data) => {
  return post('/user/saveUserInfo', data);
}

export const getOpenid =(data) => {
  console.log("--------------------------")
  return get("/user/getOpenid", data);
}
