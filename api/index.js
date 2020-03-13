var API = {
	token: JSON.parse(localStorage.getItem('$token')),
	post: function(url, data, success) {
		mui.ajax(DOMAIN + url,{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json',
				"token":this.token},	              
			success:function(data){
				success(data)
			},
			error:function(xhr,type,errorThrown){
			}
		});
	},
	get: function(url, data, success) {
		mui.ajax(DOMAIN + url,{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'get',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{"token":this.token},	
			success:function(data){
				success(data)
			},
			error:function(xhr,type,errorThrown){
			}
		});
	},
	taskTplCreate:function(data,success) {
		this.post('/taskTpl/create',data, success);
	},
	login: function(data, success) {
		this.get('/user/login', data, success);
	},
	getUserByCode: function(data, success) {
		this.get('/user/getUserByCode', data, success);
	},
	getUsers: function(success) {
		this.get('/user/getUsers', {}, success);
	},
	taskTplList: function(success) {
		this.get('/taskTpl/list', {isParent:true}, success);
	},
	getJobByStartMe: function(success) {
		this.get('/jobManager/getJobList', {jobType:"1"}, success);
	},
	getJobByWaitMe: function(success) {
		this.get('/jobManager/getJobList', {jobType:"2"}, success);
	},
}