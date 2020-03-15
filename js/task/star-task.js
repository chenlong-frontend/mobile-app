var StarTask = function() {
	this.init();
}

StarTask.prototype = {
	init: function() {
		this.el();
		this.getStarData();
	},
	el: function() {
		this.$el = {};
		this.$el.container = $('.container')
		this.$el.ul = $('.jq-ul').detach();
		this.$el.liSlider = $('.jq-li-slider').detach();
	},
	// 获取星标数据
	getStarData: function() {
		var resData;
		var that = this
		API.getJobByStar(function(res) {
			resData = res.data;
			that.displayStar(resData);
		});
	},
	displayStar: function(data) {
		this.$el.container.html(this.displaySliderData(data));
	},
	displaySliderData: function(data) {
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
		// 监听星标点击
		ulCopy.on('click', '.jq-star', function(e) {
			var taskInsCode = $(this).parent().parent().data("taskInsCode")
			console.log(taskInsCode)
		});
		return ulCopy
	}
}