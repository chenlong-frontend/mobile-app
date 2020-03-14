var StarTask = function() {
	this.init();
}

StarTask.prototype = {
	init: function() {
		this.el();
		this.bindEvent();
	},
	el: function() {
		this.$el = {};
		this.$el.ul = $('.jq-ul').detach();
		this.$el.liSlider = $('.jq-li-slider').detach();
	},
}