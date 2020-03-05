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
		this.$el.time = $('.jq-time');
		this.$el.temp = $('.jq-temp');
	},
	bindEvent: function() {
		var that = this
		this.$el.submit.on('click',function() {
			that.submitData()
		})
		this.$el.cancel.on('click',function() {
			mui.back()
		})
		this.$el.time.get(0).addEventListener('tap', function() {
			var _self = this;
			if(_self.picker) {
				_self.picker.show(function (rs) {
					result.innerText = '选择结果: ' + rs.text;
					_self.picker.dispose();
					_self.picker = null;
				});
			} else {
				var optionsJson = this.getAttribute('data-options') || '{}';
				var options = JSON.parse(optionsJson);
				var id = this.getAttribute('id');
				_self.picker = new mui.DtPicker(options);
				_self.picker.show(function(rs) {
					that.$el.time.val(rs.text);
					_self.picker.dispose();
					_self.picker = null;
				});
			}
		}, false);
		this.$el.temp.get(0).addEventListener('tap', function(){
			var userPicker = new mui.PopPicker();
			userPicker.setData([{
				value: 'ywj',
				text: '董事长 叶文洁'
			}, {
				value: 'aaa',
				text: '总经理 艾AA'
			}, {
				value: 'lj',
				text: '罗辑'
			}, {
				value: 'ymt',
				text: '云天明'
			}]);
			userPicker.show(function(items) {
				console.log(items);
				that.$el.temp.val(items[0].text);
			});
		}, false);
	},
	submitData: function() {
		var paramArr = $('form').serializeArray()
		var param = {}
		for(var i = 0;i < paramArr.length; i++) {
			param[paramArr[i].name] = paramArr[i].value
		}
		mui.ajax(DOMAIN + '/jobManager/createJob',{
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
	}
}