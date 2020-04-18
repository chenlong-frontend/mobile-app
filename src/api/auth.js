import {get} from './request';

export const login = (data) => {
  return get('/weixin/userInfo',data);
}