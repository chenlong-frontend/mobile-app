import code from './http.code.js'

const install = (Vue, vm) => {
	const baseUrl = 'https://weixin.frontjs.top'
	Vue.prototype.$u.baseUrl = baseUrl
	Vue.prototype.$u.assetsUrl = 'http://img.frontjs.top/'

	Vue.prototype.$u.http.setConfig({
		baseUrl: baseUrl,
		header: {}
	});
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		config.header.token = vm.$store.state.token
		return config; 
	}
		console.log(Vue.prototype.$u.http.interceptor)
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if(res.code === "0000") {
			return res.data;  
		} else {
			uni.showToast({
				icon: 'none',
				title: res.message || code[res.code] || '请求失败',
				duration: 2000
			});
			if (res.statusCode === 401) {
				vm.$u.vuex('token', '')
				uni.reLaunch({
					url: '/pages/login/login'
				});	
			}
			return false
		};
	}

}

export default {
	install
}