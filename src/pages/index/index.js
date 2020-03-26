import Vue from 'vue'
import App from './Index.vue'
import '@/pages/common'
import { Loading, Toast } from 'vant'

const getQuery = () => {
  if (!location.href.split('?')[1]) return {}
  let queryArray = location.href.split('?')[1].split('&')
  let query = {}
  queryArray.forEach((str) => {
    let key = str.split('=')[0]
    let value = str.split('=')[1]
    query[key] = value
  })
  return query
}

Vue.prototype.$query = getQuery() // 序列化query参数

Vue.use(Loading)
Vue.use(Toast)

new Vue({
  render: h => h(App)
}).$mount('#app')
