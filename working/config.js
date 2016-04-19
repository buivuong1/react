var api = 'http://localhost:4000/';

module.exports = {
	api: api,
	thumbnail: '85px',
	canvas: {
		tshirtWidth: 600,
		ratio: 3,
		A1: {
			width: 1124
		}
	},
	editorControl: {
		width: 400
	},
	range: {
		max: 2,
		min: 0.1,
		step: 0.1,
		value: 1
	},
	quantity: [
		{code: 1, name: '1 áo'}, {code: 2, name: '2 áo'}, {code: 3, name: '3 áo'}, {code: 4, name: '4 áo'}, {code: 5, name: '5 áo'}
	],
	showLoader: function(){
		HoldOn.open({
		  	theme:"sk-bounce",
		  	message: "Bạn chờ chút xíu nha. Đang tải"
		});
	},
	hideLoader: function(){
		HoldOn.close();
	}
}