import {
  WORK_SET_LIST,
  WORK_SET_DEPEND_LIST,
  WORK_SET_NODE_LIST
} from '../constants/redux'
import {
  taskTplList,
  taskTplCreate,
  taskTplListByType
} from '../api/work'


export function setWorkList(data) {
  return {
    type: WORK_SET_LIST,
    data
  }
}

export function setDependList(data) {
  return {
    type: WORK_SET_DEPEND_LIST,
    data
  }
}

export function setNodeList(data) {
  return {
    type: WORK_SET_NODE_LIST,
    data
  }
}

// 获取开始模版
export function taskTplListAction() {
  return async (dispatch) => {
    const data = await taskTplList();
    dispatch(setWorkList(data));
  }
};

// 提交
export function taskTplCreateAction(param) {
  return async () => {
    await taskTplCreate(param);
  }
};

// 获取 depend
export function dependListByTypeAction() {
  return async (dispatch) => {
    const data = await taskTplListByType({
      taskType: 'depend'
    });
    dispatch(setDependList(data));
  }
};

// 获取 node
export function nodeListByTypeAction() {
  return async (dispatch) => {
    const data = await taskTplListByType({
      taskType: 'node'
    });
    console.log('=======', data)
    dispatch(setNodeList(data));
  }
};
