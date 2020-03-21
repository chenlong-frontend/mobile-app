var TemplelteTaskSelect = function() {
	this.init();
	this.selectItem = [];
}

TemplelteTaskSelect.prototype = {
	init: function() {
		mui.init();
		this.el();
		this.bindEvent();
		this.getData();
	},
	el: function() {
		this.$el = {}
		this.$el.content = $('.jq-content');
		this.$el.save = $('.jq-save');
		this.$el.item = $('.jq-item').detach();
		this.$el.list = $('.jq-list').detach();
	},
	bindEvent: function() {
		var that = this
		this.$el.content.on('click', '.jq-item', function() {
			var item = $(this);
			var data = JSON.parse(item.data('data'));
			if (item.hasClass('active')) {
				item.removeClass('active');
				that.selectItem = that.selectItem.filter(function(v){
					return v.taskCode !== data.taskCode
				})
			} else {
				item.addClass('active');
				that.selectItem.push({
						taskCode: data.taskCode,
						taskName: data.taskName
					});
			}
		});
		this.$el.save.on('click', function() {
			console.log(that.selectItem)
			var templeteCreate = plus.webview.getWebviewById('templeteCreate');
			if (!templeteCreate) return
			mui.fire(templeteCreate,'selected',{
				selectItem:that.selectItem
			});         
			mui.openWindow({
				id:'templeteCreate'
			});
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
			itemCopy.data('data', JSON.stringify(data[i]))
				.find('.jq-item-name').text(data[i].taskName).end()
				.find('.jq-item-code').text(data[i].taskCode).end()
				.find('.jq-item-des').text(data[i].taskDes).end()
				.find('.jq-time').text(DATETOOL.dateFormat("YYYY-mm-dd", data[i].createDate));
			this.$el.list.append(itemCopy);
		}
		this.$el.content.html(this.$el.list)
	}
}