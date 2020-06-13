import {
  post
} from './request';

export const register = (data) => {
  return post('/user/saveUserInfo', data);
}
