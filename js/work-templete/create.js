var TemplelteCreate = function() {
	this.init();
	this.receiver = null;
}

TemplelteCreate.prototype = {
	init: function() {
		mui.init();
		this.el();
		this.pickInit();
		this.getCache();
		this.getUserData();
		this.fillData();
		this.bindEvent();
	},
	el: function() {
		this.$el = {}
		this.$el.submit = $('.jq-submit');
		this.$el.cancel = $('.jq-cancel');
		this.$el.publisher = $('.jq-publisher');
		this.$el.receiver = $('.jq-receiver');
	},
	bindEvent: function() {
		var that = this
		this.$el.submit.on('click',function() {
			that.submitData()
		})
		this.$el.cancel.on('click',function() {
			mui.back()
		})
		this.$el.receiver.get(0).addEventListener('tap', function(){
			that.userPicker.show(function(items) {
				that.receiver = items[0].value;
				that.$el.receiver.val(items[0].text);
			});
		}, false);
	},
	getCache: function() {
		this.user = store.getItem('user');
		this.userCode = store.getItem('userCode');
	},
	getUserData: function() {
		var that = this;
		API.getUsers(function(res) {
			var data = res.data;
			var arr = [];
			for(var i = 0;i < data.length;i++) {
				arr.push({text: data[i].userName, value: data[i].userCode})
			}
			that.userPicker.setData(arr);
		})
	},
	pickInit: function() {
		this.userPicker = new mui.PopPicker();
	},
	fillData: function() {
		this.$el.publisher.val(this.user.userName);
	},
	submitData: function() {
		var paramArr = $('form').serializeArray();
		var param = {}
		for(var i = 0;i < paramArr.length; i++) {
			param[paramArr[i].name] = paramArr[i].value
		}
		param.publisherUserId = this.userCode;
		param.receiverUserId = this.receiver;
		
		API.taskTplCreate(param, function(data) {
			console.log(data)
			mui.toast('提交成功') 
		})
	}
}