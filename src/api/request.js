import Taro from "@tarojs/taro";
import store from '../store'
import {
  getTokenAction
} from '../actions/loginAction'

const base = 'https://weixin.frontjs.top'
const TOKEN_ERROR = ['100002', '100007'];

export const reLogin = async (url, data, fn) => {
  await store.dispatch(getTokenAction());
  fn(url, data);
}

export const post = (url, data) => {
  const {
    login: {
      token
    }
  } = store.getState();
  return new Promise((resolve, reject) => {
    let param = {
      url: base + url,
      method: 'POST',
      data
    }
    token && (param.header = {
      "openid": token
    });
    Taro.request(param).then(res => {
      if (res.data && res.data.code === '0000') {
        resolve(res.data.data)
      } else if (res.data && TOKEN_ERROR.includes(res.data.code)) {
        console.log('重新登录');
        reLogin(url, data, post)
      } else {
        reject(res);
      }
    }).catch(e => {
      reject(e)
    })
  })
}

export const get = (url, data) => {
  const {
    login: {
      token
    }
  } = store.getState();
  return new Promise((resolve, reject) => {
    let param = {
      url: base + url,
      method: 'GET',
      data
    }
    token && (param.header = {
      "openid": token
    });
    Taro.request(param).then(res => {
      if (res.data && res.data.code === '0000') {
        resolve(res.data.data)
      } else if (res.data && TOKEN_ERROR.includes(res.data.code)) {
        console.log('重新登录');
        reLogin(url, data, get)
      } else {
        reject(res);
      }
    }).catch(e => {
      reject(e)
    })
  })
}
