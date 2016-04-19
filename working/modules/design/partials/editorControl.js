var InputRange = require('common/range');
var InputFile = require('common/chosen');
var Config = require('config');
var Dropdown = require('common/dropdown');
var Modal = require('common/modal');
var ItemBuy = require('modules/design/partials/itemBuy');

module.exports = React.createClass({
	propTypes: {
		onSlideMainImage: React.PropTypes.func,
		onChangeUpload: React.PropTypes.func
	},
	sizes: [],
	item: {},
	componentDidMount: function(){
		this.refs.dropdownQuantity.setSelected(Config.quantity[0].code);
	},
	setItem: function(item){
		this.item = item;
		this.sizes = item.sizes;
		this.forceUpdate();
		var self = this;
		setTimeout(function(){
			self.refs.dropdownSize.setSelected(item.sizes[0].uid);
		}, 400)
	},
	refreshSlider: function(){
		this.refs.range.setValue(Config.range.value);
	},
	_onBuyItem: function(){
		var size = this.refs.dropdownSize.getValue();
		var quantity = this.refs.dropdownQuantity.getValue();

		//console.log(size);
		//console.log(quantity);
	},
	render: function(){
		return (
			<div className="ui padded grid">
				<Modal header="MUA ÁO" ref="modalBuy">
					<ItemBuy ref="itemBuy"
						onBuyItem={this._onBuyItem}/>
				</Modal>
				<div className="row">
					<div className="column">
						<h1>{this.item.name}</h1>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<h3>{this.item.price+'.000 VNĐ'}</h3>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<InputFile ref="file" text="TẢI HÌNH YÊU THÍCH CỦA BẠN LÊN ÁO"
							onChangeUpload={this.props.onChangeUpload}/>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<InputRange ref="range" max={Config.range.max} min={Config.range.min} value={Config.range.value} step={Config.range.step}
							onSlide={this.props.onSlideMainImage}/>
					</div>
				</div>
				{/*<div className="row">
					<div className="column">
						<button className="ui fluid button primary">ĐĂNG ÁO LÊN TRANG CHỦ</button>
					</div>
				</div>
				<div className="row">
					<div className="column">
						<button className="ui fluid button primary">HỢP TÁC VỚI CHÚNG TÔI</button>
					</div>
				</div>*/}
				<div className="three column row">
					<div className="column">
						<Dropdown list={this.sizes} name="name" code="uid" ref="dropdownSize"/>
					</div>
					<div className="column">
						<Dropdown list={Config.quantity} name="name" code="code" ref="dropdownQuantity"/>
					</div>
					<div className="column">
						<button className="ui fluid button primary" onClick={function(){this.refs.modalBuy.show()}.bind(this)}>
							MUA ÁO
						</button>
					</div>
				</div>
			</div>
		)
	}
});