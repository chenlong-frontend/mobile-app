var User = function() {
	this.init();
}

User.prototype = {
	init: function() {
		mui.init();
		this.el();
		this.getState();
		this.display();
		this.eventBind();
	},
	el: function() {
		this.$el = {};
		this.$el.userName = $('.jq-userName');
		this.$el.logout = $('.jq-logout');
	},
	getState: function() {
		this.user = store.getItem('user') || {};
	},
	display: function() {
		this.$el.userName.text(this.user.userName)
	},
	eventBind: function() {
		this.$el.logout.on('click', function() {
			store.setItem('token', null);
			mui.openWindow({
			    url: "../login.html",
			    id:'login',
			})
		})
	}
}