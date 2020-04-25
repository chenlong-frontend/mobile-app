import {
  get,
  post
} from './request';

// 获取任务
export const getJobList = (data) => {
  return get('/jobManager/getJobList', data);
}

// 创建任务
export const createJob = (data) => {
  return post('/jobManager/createJob', data);
}

// 获取任务附加信息
export const getTaskInsInfo = (data) => {
  return get('/jobManager/getTaskInsInfo', data)
}

// 完成某个任务节点
export const finshTaskIns = (data) => {
  return get('/jobManager/finishTaskIns', data)
}
