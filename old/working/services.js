var Config = require('config');

module.exports = {
	GetListProducts: function(){
		return new Promise(function(resolve, reject){
			$.ajax({
				type: 'GET',
				url: Config.api+'products/listAll',
			})
			.done(function(data){
				resolve(data);
			})
			.fail(function(jqXHR, textStatus, errorThrown){
				reject(textStatus);
			})
		})
	}
}