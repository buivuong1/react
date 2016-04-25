var Editor = require('modules/design/partials/editor');
var ProductsCarousel = require('modules/design/partials/carousel');
var EditorControl = require('modules/design/partials/editorControl');
var Config = require('config');

module.exports = React.createClass({
	componentDidMount: function(){

	},
	_onInitProduct: function(item){
		this.refs.editor.setItem(item);
		this.refs.editorControl.setItem(item);
	},
	_onSlideMainImage: function(position, value){
		this.refs.editor.setScaleForMainImage(value);
	},
	_onChangeUpload: function(base64Image, file){
		var self = this;
		var image = new Image();
		image.onload = function(){
			self.refs.editor.setMainImage(base64Image, image);
			self.refs.editorControl.refreshSlider();
		}
		image.src = base64Image;
	},
	_onClickProduct: function(product){
		this.refs.editor.setItem(product);
		this.refs.editorControl.setItem(product);
	},
	render: function(){
		return (
			<div className="ui padded grid">
				<div className="row">
					<div className="column">
						<ProductsCarousel onInitProduct={this._onInitProduct}
							onClickProduct={this._onClickProduct}/>
					</div>
				</div>
				<div className="row">
					<div style={{width: Config.canvas.tshirtWidth}}>
						<Editor ref="editor"/>
					</div>
					<div style={{width: Config.editorControl.width, position: 'absolute'}}>
						<EditorControl ref="editorControl"
							onSlideMainImage={this._onSlideMainImage}
							onChangeUpload={this._onChangeUpload}/>
					</div>
				</div>
			</div>
		)
	}
})