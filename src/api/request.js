import Taro from "@tarojs/taro";

const post = Taro.request({
  url: 'https://weixin.frontjs.top/user/getUsers',
  method: 'POST',
  data: {
    userName: 'tj',
    passWord: 'tj'
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success: function (res) {
    console.log(res.data)
  }
})

const get = Taro.request({
  url: 'https://weixin.frontjs.top/user/getUsers',
  method: 'GET',
  data: {
    userName: 'tj',
    passWord: 'tj'
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success: function (res) {
    console.log(res.data)
  }
})

export { post, get }