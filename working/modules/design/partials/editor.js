var Config = require('config');
var Canvas = require('modules/design/partials/canvas');

module.exports = React.createClass({
	item: null,
	setItem: function(item){
		var self = this;
		this.item = item;
		if(!this.refs.canvas.hasStage()){
			this.refs.canvas.create(Config.canvas.tshirtWidth, Config.canvas.tshirtWidth);
		}

		var products_images = this.item.products_images;
		Config.showLoader();
		setTimeout(function(){
			products_images.map(function(products_images_item){
				var path = Config.api+products_images_item.path;
				if(products_images_item.type === 'canvas'){
					self.refs.canvas.fromURL(path);
					self.refs.canvas.setFirstMainImage(Config.api+'images/mainDesign.png');
				}
				if(products_images_item.type === 'main'){
					$('#mainImage').load(function() {
					    Config.hideLoader();
					}).attr('src', path+"?"+(new Date()).getTime());
				}
			})
		}, 100)
	},
	setMainImage: function(base64Data, image){
		Config.showLoader();
		this.refs.canvas.setMainImage(base64Data, image)
		.then(function(){
			Config.hideLoader();
		});
	},
	setScaleForMainImage: function(value){
		this.refs.canvas.scaleMainImage(value);
	},
	render: function(){
		return (
			<div style={{position: 'relative'}}>
				<img className="lazy" id="mainImage"/>
				<Canvas ref="canvas" zIndex={1}/>
			</div>
		)
	}
})