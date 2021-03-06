var TaskCreate = function () {
	this.init()
	this.isFinished;
	this.startCode;
}

TaskCreate.prototype = {
	init: function() {
		this.el();
		this.pickInit();
		this.getTempData();
		this.bindEvent();
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
				_self.picker = new mui.DtPicker({"type":"date"});
				_self.picker.show(function(rs) {
					that.$el.time.val(rs.text);
					_self.picker.dispose();
					_self.picker = null;
				});
			}
		}, false);
		this.$el.temp.get(0).addEventListener('tap', function(){
			that.userPicker.show(function(items) {
				console.log(items);
				that.startCode = items[0].value;
				that.$el.temp.val(items[0].text);
			});
		}, false);
	},
	pickInit: function() {
		this.userPicker = new mui.PopPicker();
	},
	getTempData: function() {
		var that = this
		var arr=[]
		API.taskTplList(function(res) {
			var data = res.data;
			for(var i = 0;i < data.length;i++) {
				arr.push({text: data[i].taskName, value: data[i].taskCode})
			}
			that.userPicker.setData(arr);
		});
	},
	submitData: function() {
		var paramArr = $('form').serializeArray()
		var param = {}
		for(var i = 0;i < paramArr.length; i++) {
			param[paramArr[i].name] = paramArr[i].value
		}
		param.startTaskTplCode = this.startCode;
		var validate = [{field: 'jobName', tip: '工作名称不得为空'},{field: 'deadLine', tip: '请选择截止时间'},
		{field: 'startTaskTplCode', tip: '请选择起初模板'}]
		var wvs=plus.webview.all();
		ARRAYTOOL.emptyCheck(param, validate, function (error) {
			if(error) return
			API.jobManagerCreateJob(param,function(data){
				mui.toast('提交成功') 
				var home = plus.webview.getWebviewById('./html/home.html');
				if (home) {
					mui.fire(home,'update',{}); 	
				}
			
				mui.back()
			})
		})

	}
}