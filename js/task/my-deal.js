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
		this.$el.star = $('.jq-star');
		this.$el.complete = $('.jq-complete');
		this.$el.inputContainer = $('.jq-inputs-container');
		this.$el.inputItem = $('.jq-input-item').detach();
	},
	bindEvent: function() {
		var that = this;
		this.$el.submit.on('click', function() {
			that.submitTaskData()
		});
		this.$el.star.on('click', function() {
			that.starTaskIns(that.taskInsCode);
		});
		this.$el.complete.on('click', function() {
			that.finshTaskIns(that.taskInsCode);
		});
	},
	gettaskInsCode: function() {
		this.taskInsCode = STRINGTOOL.getQueryVariable('taskInsCode') 
			|| '06f60afc-e193-440a-8425-e91e95e8a0b7';
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
	},
	finshTaskIns: function(taskInsCode) {
		API.finshTaskIns({taskInsCode:taskInsCode});
	},
	starTaskIns: function(taskInsCode) {
		API.starTaskIns({taskInsCode:taskInsCode})
	}
}