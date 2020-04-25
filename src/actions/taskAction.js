import {
  TASK_SET_START_LIST,
  TASK_SET_WAIT_LIST,
  TASK_SET_STAR_LIST,
  TASK_SET_INS_INFO
} from '../constants/redux'
import {
  getJobList,
  createJob,
  getTaskInsInfo,
  finshTaskIns
} from '../api/task'

export function setStartList(data) {
  return {
    type: TASK_SET_START_LIST,
    data
  }
}

export function setWaitList(data) {
  return {
    type: TASK_SET_WAIT_LIST,
    data
  }
}

export function setStarList(data) {
  return {
    type: TASK_SET_STAR_LIST,
    data
  }
}

export function setInsInfo(data) {
  return {
    type: TASK_SET_INS_INFO,
    data
  }
}

// 我参与过的任务状态
export function getJobByStartMeAction() {
  return async (dispatch) => {
    const data = await getJobList({
      jobType: "1"
    });
    dispatch(setStartList(data));
  }
};

// 需要我完成的
export function getJobByWaitMeAction() {
  return async (dispatch) => {
    const data = await getJobList({
      jobType: "2"
    });
    dispatch(setWaitList(data));
  }
};

// 星标任务
export function getJobByStarAction() {
  return async (dispatch) => {
    const data = await getJobList({
      jobType: "3"
    });
    dispatch(setStarList(data));
  }
};

// 获取任务附加信息
export function getTaskInsInfoAction(taskInsCode) {
  return async (dispatch) => {
    const data = await getTaskInsInfo({
      taskInsCode
    });
    dispatch(setInsInfo(data));
  }
};

// 提交
export function createJobAction(param) {
  return async () => {
    await createJob(param);
  }
};

// 完成某个任务节点
export function finshTaskInsAction(taskInsCode) {
  return async () => {
    await finshTaskIns({
      taskInsCode
    });
  }
};
