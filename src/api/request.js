import Taro from "@tarojs/taro";
import store from '../store'

const base = 'https://weixin.frontjs.top'

const post =  (url,data) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      url: base + url,
      method: 'POST',
      data
    }).then(res => {
      if (res.data && res.data.code === '0000') {
        resolve(res.data.data)
      } else {
        reject(res);
      }
    }).catch(e => {
      reject(e)
    })
  })
}

const get = (url,data) => {
  const {login: {token}} = store.getState();
  return new Promise((resolve, reject) => {
    Taro.request({
      url: base + url,
      method: 'GET',
      headers:{"token": token},
      data
    }).then(res => {
      if (res.data && res.data.code === '0000') {
        resolve(res.data.data)
      } else {
        reject(res);
      }
    }).catch(e => {
      reject(e)
    })
  })
}

export { post, get }