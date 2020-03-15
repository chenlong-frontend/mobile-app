var Home = function () {
	this.init();
}

Home.prototype = {
	init: function() {
		this.el();
		this.bindEvent();
		this.getMyDealData();
		this.getMyStartData();
	},
	el: function() {
		this.$el = {};
		this.$el.item1 = $('#item1');
		this.$el.item2 = $('#item2');
		this.$el.fabs = $('.jq-fabs');
		this.$el.submit = $('.jq-submit');
		this.$el.segmented = mui('.jq-segmentedControl');
		this.$el.ul = $('.jq-ul').detach();
		this.$el.li = $('.jq-li').detach();
		this.$el.liSlider = $('.jq-li-slider').detach();
	},
	bindEvent: function() {
		var that = this
		this.$el.fabs.on('click',function() {
			mui.openWindow({
			    url: "./task-create.html",
			    id:'templeteCreate',
			})
		});
		this.$el.segmented.on('tap', 'a', function(e) {
			var index = $(this).data('index')
			if(index === 1) {
				that.$el.fabs.show();
			} else {
				that.$el.fabs.hide();
			}
		});
	},
	getMyStartData: function() {
		var resData;
		var that = this
		API.getJobByStartMe(function(res) {
			resData = res.data;
			that.displayMyStart(resData);
		});
	},
	getMyDealData: function() {
		var resData;
		var that = this
		API.getJobByWaitMe(function(res) {
			resData = res.data;
			that.displayMyDeal(resData);
		});
	},
	displayData: function(data) {
		var ulCopy = this.$el.ul.clone();
		for(var i = 0;i < data.length;i++){
			var liCopy = this.$el.li.clone();
			liCopy.find('.jq-jobName').text(data[i].jobName).end()
				.find('.jq-jobCode').text(data[i].jobCode).end()
				.find('.jq-jobDes').text(data[i].jobDes).end()
				.find('.jq-time').text(DATETOOL.dateFormat("YYYY-mm-dd", data[i].deadLine)).end()
				.find('.jq-jobSatus').text(data[i].isFinished);
			ulCopy.append(liCopy);
		}
		return ulCopy
	},
	displaySliderData: function(data) {
		var that = this;
		var ulCopy = this.$el.ul.clone();
		for(var i = 0;i < data.length;i++){
			var liCopy = this.$el.liSlider.clone();
			liCopy.find('.jq-jobName').text(data[i].jobName).end()
				.find('.jq-jobCode').text(data[i].jobCode).end()
				.find('.jq-jobDes').text(data[i].jobDes).end()
				.find('.jq-time').text(DATETOOL.dateFormat("YYYY-mm-dd", data[i].deadLine)).end()
				.find('.jq-jobSatus').text(data[i].isFinished).end()
				.data('taskInsCode', data[i].taskInsCode);
			ulCopy.append(liCopy);
		}
		// 监听完成点击
		ulCopy.on('click', '.jq-complete', function(e) {
			e.stopPropagation();
			var taskInsCode = $(this).parent().parent().data("taskInsCode");
			that.finshTaskIns(taskInsCode);
		});
		// 监听星标点击
		ulCopy.on('click', '.jq-star', function(e) {
			e.stopPropagation();
			var taskInsCode = $(this).parent().parent().data("taskInsCode");
			that.starTaskIns(taskInsCode);
		});
		// 监听单个点击
		ulCopy.on('click', 'li', function(e){
			mui.openWindow({
			    url: "./my-deal.html?taskInsCode=" + $(this).data('taskInsCode'),
			    id:'myDeal',
			})
		})
		return ulCopy
	},
	displayMyStart: function(data) {
		this.$el.item1.html(this.displayData(data || []));
	},
	displayMyDeal: function(data) {
		this.$el.item2.html(this.displaySliderData(data || []));
	},
	finshTaskIns: function(taskInsCode) {
		API.finshTaskIns({taskInsCode:taskInsCode});
	},
	starTaskIns: function(taskInsCode) {
		API.starTaskIns({taskInsCode:taskInsCode})
	}
}