$(function(){
	mui.init();
	mui.plusReady(function() {
		$('.jq-fabs').on('click',function(){
			mui.openWindow({
			    url: "./templete-create.html",
			    id:'templeteCreate',
			})
		})
	})
})
