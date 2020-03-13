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
		this.$el.ul = $('.jq-ul').detach();
		this.$el.li = $('.jq-li').detach();
	},
	bindEvent: function() {
		this.$el.submit.on('click',function() {
			alert("ahaha");
			that.submitData()
		})
		var that = this
		this.$el.fabs.on('click',function() {
			mui.openWindow({
			    url: "./task-create.html",
			    id:'templeteCreate',
			})
		})
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
				.find('.jq-time').text(data[i].deadLine).end()
				.find('.jq-jobSatus').text(data[i].isFinished).end()
				.find('.jq-taskInsCode').text(data[i].taskInsCode);
			ulCopy.append(liCopy);
		}
		return ulCopy
	},
	displayMyStart: function(data) {
		this.$el.item1.html(this.displayData(data));
	},
	displayMyDeal: function(data) {
		this.$el.item2.html(this.displayData(data));
	},
	submitData: function() {
		alert(0)
	}
}