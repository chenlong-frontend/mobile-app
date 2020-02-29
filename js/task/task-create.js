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
		this.$el.cancel = $('.jq-cancel');
	},
	bindEvent: function() {
		var that = this
		this.$el.submit.on('click',function() {
			that.submitData()
		})
		this.$el.cancel.on('click',function() {
			mui.back()
		})
	},
	submitData: function() {
		mui.ajax(DOMAIN + '/jobManager/createJob',{
			var paramArr = $('form').serializeArray()
			var param = {}
			for(var i = 0;i < paramArr.length; i++) {
				param[paramArr[i].name] = paramArr[i].value
			}
			mui.ajax(DOMAIN + '/taskTpl/create',{
				data:param,
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
				headers:{'Content-Type':'application/json'},	              
				success:function(data){
					console.log(data)
					mui.toast('提交成功') 
				},
			})
		});
	}
}