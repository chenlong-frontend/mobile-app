var Home = function () {
	this.init();
}

Home.prototype = {
	init: function() {
		this.el();
		this.getMyDealData();
		this.getMyStartData();
	},
	el: function() {
		this.$el = {};
		this.$el.item1 = $('#item1');
		this.$el.item2 = $('#item2');
		this.$el.ul = $('.jq-ul').detach();
		this.$el.li = $('.jq-li').detach();
	},
	getMyStartData: function() {
		this.displayMyStart([{jobCode: '12233', jobName: '任务名称',
		isFinished: '完成', deadLine: '2020-01-03 22:00',jobDes: '任务描述'}]);
	},
	getMyDealData: function() {
		this.displayMyDeal([{jobCode: '12233', jobName: '任务名称',
		isFinished: '完成', deadLine: '2020-01-03 22:00',jobDes: '任务描述'}]);
	},
	displayData: function(data) {
		var ulCopy = this.$el.ul.clone();
		for(var i = 0;i < data.length;i++){
			var liCopy = this.$el.li.clone();
			liCopy.find('.jq-jobName').text(data[i].jobName).end()
				.find('.jq-jobCode').text(data[i].jobCode).end()
				.find('.jq-jobDes').text(data[i].jobDes).end()
				.find('.jq-time').text(data[i].deadLine);
			ulCopy.append(liCopy);
		}
		return ulCopy
	},
	displayMyStart: function(data) {
		this.$el.item1.html(this.displayData(data));
	},
	displayMyDeal: function(data) {
		this.$el.item2.html(this.displayData(data));
	}
}