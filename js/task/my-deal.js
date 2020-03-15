var MyDeal = function () {
	this.init();
}

MyDeal.prototype = {
	init: function() {
		this.el();
		this.bindEvent();
		this.gettaskInsCode();
		this.getTaskInsInfo()
	},
	el: function() {
		this.$el = {};
		this.$el.taskInfo = $('.jq-taskInfo');
		this.$el.taskForm = $('.jq-form');
		this.$el.submit = $('.jq-submit');
		this.$el.inputContainer = $('.jq-inputs-container');
		this.$el.inputItem = $('.jq-input-item').detach();
	},
	bindEvent: function() {
		var that = this;
		this.$el.submit.on('click', function() {
			that.submitTaskData()
		})
	},
	gettaskInsCode: function() {
		this.taskInsCode = STRINGTOOL.getQueryVariable('taskInsCode') 
			|| '37cb9469-f51f-4727-8da0-dfc28cfc568b';
	},
	getTaskInsInfo: function() {
		var that = this;
		API.getTaskInsInfo({taskInsCode: this.taskInsCode}, function(res) {
			if(!res.data) return
			that.displayTaskInfo(res.data);
			if(res.data.taskData) {
				that.displayTaskData(JSON.parse(res.data.taskData));
			}
		})
	},
	displayTaskInfo: function(data) {
		this.$el.taskInfo.find('.jq-taskName').val(data.taskName).end()
			.find('.jq-taskStatus').val(data.taskStatus);
	},
	displayTaskData: function(data) {
		var keys = Object.keys(data);
		var div = $('<div></div>');
		for(var i=0;i< keys.length;i++) {
			var inputItemCopy = this.$el.inputItem.clone();
			var key = keys[i];
			inputItemCopy.find('.jq-input-label').text(key).end()
				.find('.jq-input-value').val(data[key]).attr('name', key);
			div.append(inputItemCopy);
		}
		this.$el.inputContainer.html(div);
	},
	submitTaskData: function() {
		var paramArr = this.$el.taskForm.serializeArray()
		var param = {taskData:{}}
		for(var i = 0;i < paramArr.length; i++) {
			param.taskData[paramArr[i].name] = paramArr[i].value
		}
		param.taskData = JSON.stringify(param.taskData);
		param.taskInsCode = this.taskInsCode;
		API.editTaskInsInfo(param, function(res){
			console.log(res)
		})
	}
}