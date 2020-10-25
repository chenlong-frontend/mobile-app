import Vue from 'vue'
import App from './App'
import store from './store/index.js'
// 引入全局uView
import uView from 'uview-ui'
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from './api/http.interceptor.js'
// http接口API抽离，免于写url或者一些固定的参数
import httpApi from './api/http.api.js'
let vuexStore = require('./store/$u.mixin.js')

Vue.config.productionTip = false

App.mpType = 'app'


Vue.use(uView);
Vue.mixin(vuexStore)

const updateManager = uni.getUpdateManager();

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  // console.log(res.hasUpdate,'hasUpdate');
});

updateManager.onUpdateReady(function (res) {
  uni.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
      }
    }
  });

});

updateManager.onUpdateFailed(function (res) {
  // 新的版本下载失败
});


const app = new Vue({
	store,
    ...App
})
Vue.use(httpInterceptor, app)
Vue.use(httpApi, app)
app.$mount()
