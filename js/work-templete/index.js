var TemplelteTask = function() {
	this.init()
}

TemplelteTask.prototype = {
	init: function() {
		mui.init();
		this.el();
		this.bindEvent();
		this.getData();
	},
	el: function() {
		this.$el = {}
		this.$el.fabs = $('.jq-fabs');
		this.$el.content = $('.jq-content');
		this.$el.item = $('.jq-item').detach();
		this.$el.list = $('.jq-list').detach();
	},
	bindEvent: function() {
		var that = this
		this.$el.fabs.on('click',function() {
			mui.openWindow({
			    url: "./templete-create.html",
			    id:'templeteCreate',
			})
		})
	},
	getData: function() {
		var that = this;
		API.taskTplList(function(res){
			res && that.displayData(res.data)
		})
	},
	displayData: function(data) {
		for(var i = 0;i < data.length;i++) {
			var itemCopy = this.$el.item.clone();
			itemCopy.find('.jq-item-name').text(data[i].taskName).end()
				.find('.jq-item-code').text(data[i].taskCode).end()
				.find('.jq-item-des').text(data[i].taskDes);
			this.$el.list.append(itemCopy);
			console.log(data[i])
		}
		this.$el.content.html(this.$el.list)
	}
}