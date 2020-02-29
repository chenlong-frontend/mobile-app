var TemplelteCreate = function() {
	this.init()
}

TemplelteCreate.prototype = {
	init: function() {
		mui.init();
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
		var paramArr = $('form').serializeArray();
		var param = {}
		for(var i = 0;i < paramArr.length; i++) {
			param[paramArr[i].name] = paramArr[i].value
		}
		mui.ajax(DOMAIN + '/taskTpl/create',{
			data:param,
			dataType:'json',
			type:'post',
			timeout:10000,
			headers:{'Content-Type':'application/json'},	              
			success:function(data){
				console.log(data)
				mui.toast('提交成功') 
			},
		})
	}
}