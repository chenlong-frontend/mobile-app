import {get} from './request';

export const taskTplList = (data) => {
  return get('/taskTpl/list', data);
}