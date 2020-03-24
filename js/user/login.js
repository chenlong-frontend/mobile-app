var Login = function() {
	this.init();
}

Login.prototype = {
	init: function() {
		var that = this;
		this.el();
		this.eventBind();
		mui.plusReady && mui.plusReady(function() {
			that.closeWebView();
		})
	},
	el: function() {
		this.$el = {};
		this.$el.submit = $('.jq-submit');
	},
	eventBind: function() {
		var that = this;
		this.$el.submit.on('click', function() {
			that.submit();
		})
	},
	closeWebView: function () {
		// 获取所有Webview窗口
		var wvs=plus.webview.all();
		var ws=plus.webview.currentWebview();
		for(var i=0;i<wvs.length;i++){
			if (wvs[i] !== ws) {
				plus.webview.close(wvs[i]);
			}
		}
	},
	submit: function () {
		var paramArr = $('form').serializeArray()
		var param = {}
		for(var i = 0;i < paramArr.length; i++) {
			param[paramArr[i].name] = paramArr[i].value
		}
		API.login(param, function(res) {
			store.setItem('token', res.data.token);
			store.setItem('userCode', res.data.userCode);
			mui.openWindow({
				url: 'tab.html',
				id: 'tab',
				preload: true,
			});
		})
	}
}