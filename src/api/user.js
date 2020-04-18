import {get} from './request';

export const getUserByToken = (data) => {
  return get('/user/getUserByToken', data);
}