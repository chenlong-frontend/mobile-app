var ARRAYTOOL = {
	emptyCheck: function (data, validate, cb) {
		var errorValidate = false;
		for (var i = 0;i < validate.length;i++) {
			var value = data[validate[i].field]
			if (typeof value === 'number') {
				continue
			}
			if (typeof value === 'string' && value.length === 0) {
				errorValidate = validate
				break;
			}  
			if (!value) {
				errorValidate = validate
				break
			}
		} 
		if(errorValidate) {
			mui.toast(errorValidate[i].tip,{ duration:'short', type:'div' })
			cb(true, errorValidate);
			return
		}
		cb(false)
	}
}