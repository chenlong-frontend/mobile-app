var Login = function() {
	this.init();
}

Login.prototype = {
	init: function() {
		this.el();
		this.eventBind();
	},
	el: function() {
		this.$el = {};
		this.$el.submit = $('.jq-submit');
	},
	eventBind: function() {
		var that = this;
		var paramArr = $('form').serializeArray()
		var param = {}
		for(var i = 0;i < paramArr.length; i++) {
			param[paramArr[i].name] = paramArr[i].value
		}
		this.$el.submit.on('click', function() {
			mui.openWindow({
				url: 'tab.html',
				id: 'tab',
				preload: true,
			});
		})
	}
}