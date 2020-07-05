import {
  get,
  post
} from './request';

// 获取任务
export const getJobList = () => {
  return get('/task/getWorks');
}

// 获取我的任务
export const getMyJobList = () => {
  return get('/task/getMyWorks');
}

// 创建启动器嘿嘿
export const createJob = (data) => {
  console.log(data);
  console.warn(data);
  return post('/task/createWorkTemplate', data);
}

// 获取任务附加信息
export const getTaskInsInfo = (data) => {
  return get('/task/getTaskInsInfo', data)
}

// 完成某个任务节点
export const finshTaskIns = (data) => {
  return get('/task/submitWork', data)
}

export const getWorkDetailByWorkId = (data) => {
  return get('/task/getWorkDetailByWorkId', data)
}

export const getTaskInsInfoDetailById = (data) => {
  console.log("0000000000000000000000000")
  return get('/task/getTaskInsInfoDetailById', data)
}


