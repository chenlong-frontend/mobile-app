var TemplelteCreate = function() {
	this.init()
}

TemplelteCreate.prototype = {
	init: function() {
		this.el()
		this.bindEvent()
	},
	el: function() {
		this.$el = {}
		this.$el.submit = $('.jq-submit');
	},
	bindEvent: function() {
		var that = this
		this.$el.submit.on('click',function() {
			that.submitData()
		})
	},
	submitData: function() {
		API.taskTplCreate({
				taskDes: "renwumiaosu",
				taskType:'renwumiaosu',
				publisherUserId:'a141a5ed-87c2-433c-8029-bb5413620076',
				taskName:'renwumiaosu',
				isParent : true,
				receiverUserId:'a141a5ed-87c2-433c-8029-bb5413620076',
				nextTaskTpl:null,
				taskDependTpl:null
			},function(res){
				console.log(res)
			})
	}
}