import {
  WORK_SET_LIST
} from '../constants/redux'
import {taskTplList, taskTplCreate} from '../api/work'


export function setWorkList (token) {
  return {
    type: WORK_SET_LIST,
    data: token
  }
}

// 获取开始模版
export function taskTplListAction () {
  return async (dispatch) => {
    const data = await taskTplList({isParent:true});
    dispatch(setWorkList(data));
  }
};

// 提交
export function taskTplCreateAction (param) {
  return async () => {
    await taskTplCreate(param);
  }
};