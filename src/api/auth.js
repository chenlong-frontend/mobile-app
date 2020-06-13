import {post} from './request';

export const login = (data) => {
  return post('/user/saveUserInfo',data);
}