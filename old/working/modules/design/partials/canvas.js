var Config = require('config');

// USE KONVA.JS
// WEB: https://konvajs.github.io
module.exports = React.createClass({
	stage: null,
	layerBottom: null,
	layerFront: null,
	propTypes: {
		zIndex: React.PropTypes.number
	},
	create: function(width, height){
		this.stage = new Konva.Stage({
			container: this.refs.canvas,
			width: width,
			height: height
		});
		this.layerBottom = new Konva.Layer();
		this.stage.add(this.layerBottom);
		this.layerFront = new Konva.Layer({listening: false});
		this.stage.add(this.layerFront);
	},
	hasStage: function(){
		if(this.stage !== null){
			var bgImage = this.getBackgroundImage();
			if(typeof bgImage !== 'undefined'){
				bgImage.remove();
			}
			return true;
		}else{
			return false;
		}
	},
	fromURL: function(pathImage){
		var self = this;
		var imageObj = new Image();
		imageObj.onload = function(){
		  	var image = new Konva.Image({
		    	image: imageObj,
		    	id: 'backgroundImage'
		  	});
		  	self.layerFront.add(image);
			self.layerFront.draw();
		};
		imageObj.src = pathImage;
	},
	setMainImage: function(pathImage, object){
		var c = document.createElement('canvas');
		c.width = Math.ceil(object.width/Config.canvas.ratio);
		c.height = Math.ceil(object.height/Config.canvas.ratio);
		var ctx = c.getContext('2d');
		ctx.drawImage(object, 0, 0, c.width, c.height);
		var b64str = c.toDataURL('image/jpeg');
		
		var mainImage = this.getMainImage();
		if(typeof mainImage !== 'undefined')
			mainImage.remove();

		var self = this;
		var imageObj = new Image();
		if(object.width < Config.canvas.A1.width){
			var diff = Config.canvas.A1.width/object.width;
			c.width = diff*c.width;
			c.height = diff*c.height;
		}
		var x = y = 0;

		if(c.width < this.stage.width()){
			x = (this.stage.width()-c.width)/2;
			y = (this.stage.height()-c.height)/2;
		}

		return new Promise(function(resolve, reject){
			imageObj.onload = function(){
			  	var image = new Konva.Image({
			    	image: imageObj,
			    	width: c.width,
			    	height: c.height,
			    	draggable: true,
			    	id: 'mainImage',
			    	x: x,
			    	y: y
			  	});
			  	self.layerBottom.add(image);
				self.layerBottom.draw();
				resolve();
			};
			imageObj.src = b64str;
		})
	},
	setFirstMainImage: function(pathImage){
		if(typeof this.getMainImage() === 'undefined'){
			var self = this;
			var imageObj = new Image();
			imageObj.onload = function(){
			  	var image = new Konva.Image({
			    	image: imageObj,
			    	draggable: true,
			    	id: 'mainImage'
			  	});
			  	self.layerBottom.add(image);
				self.layerBottom.draw();
			};
			imageObj.src = pathImage;
		}
	},
	scaleMainImage: function(value){
		var node = this.getMainImage();
		if(typeof node !== 'undefined'){
			node.scale({
				x: value,
				y: value
			});
		}
		
		this.layerBottom.draw();
	},
	getMainImage: function(){
		return this.stage.find('#mainImage')[0];
	},
	getBackgroundImage: function(){
		return this.stage.find('#backgroundImage')[0];
	},
	render: function(){
		return <div ref="canvas" style={{position: 'absolute', left: 0, top: 0, zIndex: this.props.zIndex}}/>
	}
})