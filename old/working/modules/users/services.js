var Config = require('config');

module.exports = {
	PostLogin: function(){
		return new Promise(function(resolve, reject){
			$.ajax({
				type: 'post',
				url: Config.apiAuth+'users/login'
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