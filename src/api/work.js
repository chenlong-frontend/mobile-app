import {
  get,
  post
} from './request';

export const taskTplList = (data) => {
  return get('/task/getAllTaskTemplates', data);
}

export const taskTplCreate = (data) => {
  return post('/taskTpl/create', data);
}

export const taskTplListByType = (data) => {
  return get('/task/getAllTaskTemplates');
}
