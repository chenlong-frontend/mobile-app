var store = {
	setItem: function(name, data) {
		localStorage.setItem('$' + name, JSON.stringify(data));
	},
	getItem: function(name) {
		var item = localStorage.getItem('$' + name);
		return JSON.parse(item);
	}
}