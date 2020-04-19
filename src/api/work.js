import {get, post} from './request';

export const taskTplList = (data) => {
  return get('/taskTpl/list', data);
}

export const taskTplCreate = (data) => {
  return post('/taskTpl/create', data);
}