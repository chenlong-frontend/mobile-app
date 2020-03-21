var TemplelteCreate = function() {
	this.init();
	this.receiver = null;
	this.depend = null;
	this.next = null;
}

TemplelteCreate.prototype = {
	init: function() {
		mui.init();
		this.el();
		this.pickInit();
		this.getCache();
		this.getUserData();
		this.getTempList();
		this.bindEvent();
	},
	el: function() {
		this.$el = {}
		this.$el.submit = $('.jq-submit');
		this.$el.cancel = $('.jq-cancel');
		this.$el.publisher = $('.jq-publisher');
		this.$el.receiver = $('.jq-receiver');
		this.$el.depend = $('.jq-depend');
		this.$el.next = $('.jq-next');
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
			that.userPicker.setData(that.userArr);
			that.userPicker.show(function(items) {
				that.receiver = items[0].value;
				that.$el.receiver.val(items[0].text);
			});
		}, false);
		this.$el.depend.get(0).addEventListener('tap', function(){
			mui.openWindow({
			    url: "./work-templete/work-templete-select.html",
			    id:'workTempleteSelect',
			})
		}, false);
		this.$el.next.get(0).addEventListener('tap', function(){
			that.userPicker.setData(that.listArr);
			that.userPicker.show(function(items) {
				that.next = items[0].value;
				that.$el.next.val(items[0].text);
			});
		}, false);
		
		window.addEventListener('selected',function(event){
		  //获得事件参数
		  var selectItem = event.detail.selectItem;
		  that.depend = selectItem.map(function(v) {
			  return v.taskCode
		  });
		  console.log(JSON.stringify(that.depend))
		  that.$el.depend.val('当前已选择 ' + selectItem.length + ' 个');
		});
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
			that.userArr = arr
		})
	},
	getTempList: function() {
		var that = this;
		API.taskTplList(function(res){
			var data = res.data;
			var arr = [];
			for(var i = 0;i < data.length;i++) {
				arr.push({text: data[i].taskName, value: data[i].taskCode})
			}
			that.listArr = arr
		})
	},
	pickInit: function() {
		this.userPicker = new mui.PopPicker();
	},
	submitData: function() {
		var paramArr = $('form').serializeArray();
		var param = {}
		for(var i = 0;i < paramArr.length; i++) {
			param[paramArr[i].name] = paramArr[i].value
		}
		param.receiverUserId = this.receiver;
		param.dependTaskCode = this.depend;
		param.nextTaskCode = this.next;
		
		var validate = [{field: 'taskName', tip: '工作名称不得为空'},{field: 'taskType', tip: '任务类型不得为空'}, 
		{field: 'dependTaskCode', tip: '请选择依赖模板'},{field: 'nextTaskCode', tip: '请选择下个模板'},
		{field: 'receiverUserId', tip: '请选择接接受人'}]
		ARRAYTOOL.emptyCheck(param, validate, function (error) {
			if(error) return
			API.taskTplCreate(param, function(data) {
				mui.toast('提交成功');
				mui.back()
			})
		})
	}
}