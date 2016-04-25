var Services = require('services');
var Config = require('config');

module.exports = React.createClass({
	items: [],
	propTypes: {
		onInitProduct: React.PropTypes.func,
		onClickProduct: React.PropTypes.func
	},
	componentDidMount: function(){
		this._serverGetListAllProducts();
	},
	componentWillUnmount: function(){
		this.items = [];
	},
	_serverGetListAllProducts: function(){
		var self = this;
		Services.GetListProducts()
		.then(function(response){
			self.items = response.data;
			self.props.onInitProduct(self.items[0]);
			self.forceUpdate(function(){
				setTimeout(function(){
					$(self.refs.carousel).slick({
						lazyLoad: 'ondemand',
						dots: true,
						infinite: false,
						speed: 300,
						slidesToShow: 10,
						slidesToScroll: 2,
						centerMode: true
					})
				})
			})
		}, function(error){
			
		})
	},
	_onClickProduct: function(item){
		this.props.onClickProduct(item);
	},
	render: function(){
		return (
			<div ref="carousel">
				{
					this.items.map(function(item, index){
						var html_main_image = null;
						var products_images = item.products_images;
						for(var i = 0; i < products_images.length; i++){
							var products_images_item = products_images[i];
							var path = Config.api+products_images_item.path;
							if(products_images_item.type === 'main'){
								html_main_image = (<div style={{cursor: 'pointer'}} onClick={this._onClickProduct.bind(this, item)}><img data-lazy={path} style={{width: Config.thumbnail}}/></div>);
								break;
							}
						}
						return html_main_image;
					},this)
				}
			</div>
		)
	}
})