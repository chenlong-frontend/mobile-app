import {get, post} from './request';

// 获取任务
export const getJobList = (data) => {
  return get('/jobManager/getJobList', data);
}

// 创建任务
export const createJob = (data) => {
  return post('/jobManager/createJob', data);
}