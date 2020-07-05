import {

  TASK_SET_START_LIST,
  TASK_SET_WAIT_LIST,
  TASK_SET_STAR_LIST,
  TASK_SET_INS_INFO,
  TASK_SET_ALL_LIST,
  TASK_SET_MAIN_TASK_INFO
} from '../constants/redux'
import {
  getJobList,
  createJob,
  getTaskInsInfo,
  finshTaskIns,
  getMyJobList,
  getWorkDetailByWorkId,
} from '../api/task'

export function setAllList(data) {
  return {
    type: TASK_SET_ALL_LIST,
    data
  }
}

export function setMainTask(data) {
  return {
    type: TASK_SET_MAIN_TASK_INFO,
    data
  }
}


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

// 所有任务
export function getAllTask() {
  return async (dispatch) => {
    const data = await getJobList();
    dispatch(setAllList(data));
  }
};

// 需要我完成的
export function getJobByWaitMeAction() {
  return async (dispatch) => {
    const data = await getMyJobList({
      jobType: "2"
    });
    console.log(data)
    dispatch(setWaitList(data));
  }
};

// 获取子任务信息
export function getTaskInsInfoAction(workTemplateId) {
  return async (dispatch) => {
    const data = await getTaskInsInfo({
      workTemplateId
    });
    dispatch(setInsInfo(data));
    return data.taskData && JSON.parse(data.taskData)
  }
};

// 提交
export function createJobAction(param) {
  return async () => {
    await createJob(param);
  }
};

// 完成某个任务节点
export function finshTaskInsAction(workTemplateId) {
  return async () => {
    await finshTaskIns({
      workTemplateId
    });
  }
};

// 查询主任务详情
// TODO
export function getMainTaskAction(workTemplateId) {
  return async (dispatch) => {
    console.log('workTemplateId', workTemplateId)
    const data = await getWorkDetailByWorkId({
          workTemplateId
        });
    }
    console.log("tttttttttttttttttttttttttttttt")
    console.log(data);
    dispatch(setMainTask(data));
    return data
};

// 请求子任务详情
// TODO
export function getTaskInsInfoDetailByIdAciton(workTemplateId) {
  return async (dispatch) => {
    // const data = await getTaskInsInfoDetailById({
    //   workTemplateId
    // });
    // dispatch(setInsInfo(data));
    // return data.taskData && JSON.parse(data.taskData)
  }
};

// 通过
// TODO
export function passTaskAction(code) {
  return async () => {
    console.log(code)

  }
};

// 驳回
// TODO
export function rejectTaskAction(code) {
  return async () => {
    console.log(code)

  }
};
