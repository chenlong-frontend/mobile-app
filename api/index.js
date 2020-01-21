var API = {
	taskTplCreate:function(data,success) {
		mui.ajax(DOMAIN + '/taskTpl/create',{
			data:data,
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			headers:{'Content-Type':'application/json'},	              
			success:function(data){
				success(data)
			},
			error:function(xhr,type,errorThrown){
			}
		});
	}
}