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
	
	//创建模版接口
	taskTplCreate:function(data,success) {
		this.post('/taskTpl/create',data, success);
	},
	
	//登录
	login: function(data, success) {
		this.get('/user/login', data, success);
	},
	
	//按照usercode获取用户信息
	getUserByCode: function(data, success) {
		this.get('/user/getUserByCode', data, success);
	},
	
	//获取用户信息
	getUsers: function(success) {
		this.get('/user/getUsers', {}, success);
	},
	
	//获取开始模版
	taskTplList: function(success) {
		this.get('/taskTpl/list', {isParent:true}, success);
	},
	
	//我参与过的任务状态
	getJobByStartMe: function(success) {
		this.get('/jobManager/getJobList', {jobType:"1"}, success);
	},
	
	//需要我完成的
	getJobByWaitMe: function(success) {
		this.get('/jobManager/getJobList', {jobType:"2"}, success);
	},
	//完成某个任务节点
	finshTaskIns: function(data, success) {
		this.get('/jobManager/finishTaskIns', data, success);
	},
	
	//标记星任务
	starTaskIns: function(data, success) {
		this.get('/jobManager/addTaskInsExt', data, success);
	},
}