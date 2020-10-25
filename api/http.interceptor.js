import code from './http.code.js'

const install = (Vue, vm) => {
	const baseUrl = 'https://weixin.frontjs.top'
	Vue.prototype.$u.baseUrl = baseUrl
	Vue.prototype.$u.http.setConfig({
		baseUrl: baseUrl,
		header: {}
	});
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		vm.$store.state.token && (config.header.openid = vm.$store.state.token);
		vm.$store.state.user && (config.header.userId = vm.$store.state.user.userId);
		return config; 
	}
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
			if (res.code === "100002" ||  res.code === "100007") {
				vm.$u.vuex('token', '')
				uni.reLaunch({
					url: '/pages/home/index'
				});	
			}
			return false
		};
	}
}

export default {
	install
}