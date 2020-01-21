var TaskCreate = function () {
	this.init()
}

TaskCreate.prototype = {
	init: function() {
		this.el()
		this.bindEvent()
	},
	el: function() {
		this.$el = {}
		this.$el.submit = $('.jq-submit');
	},
	bindEvent: function() {
		var that = this
		this.$el.submit.on('click',function() {
			that.submitData()
		})
	},
	submitData: function() {
		mui.ajax(DOMAIN + '/jobManager/createJob',{
			data:{
				deadLine: 1579590703000,
				isFinished:'Finish',
				jobDes:'111',
				jobName:'111',
				startTaskCode:'1111'
			},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success:function(data){
				console.log(data)
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
	}
}