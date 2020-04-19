import {
  TASK_SET_START_LIST, TASK_SET_WAIT_LIST, TASK_SET_STAR_LIST
} from '../constants/redux'
import {getJobList, createJob} from '../api/task'

export function setStartList (data) {
  return {
    type: TASK_SET_START_LIST,
    data
  }
}

export function setWaitList (data) {
  return {
    type: TASK_SET_WAIT_LIST,
    data
  }
}

export function setStarList (data) {
  return {
    type: TASK_SET_STAR_LIST,
    data
  }
}

// 我参与过的任务状态
export function getJobByStartMeAction () {
  return async (dispatch) => {
    const data = await getJobList({jobType:"1"});
    dispatch(setStartList(data));
  }
};

// 需要我完成的
export function getJobByWaitMeAction () {
  return async (dispatch) => {
    const data = await getJobList({jobType:"2"});
    dispatch(setWaitList(data));
  }
};

// 星标任务
export function getJobByStarAction () {
  return async (dispatch) => {
    const data = await getJobList({jobType:"3"});
    dispatch(setStarList(data));
  }
};

// 提交
export function createJobAction (param) {
  return async () => {
    await createJob(param);
  }
};