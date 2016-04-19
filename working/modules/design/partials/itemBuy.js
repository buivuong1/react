var InputText = require('common/inputText');

module.exports = React.createClass({
	propTypes: {
		onBuyItem: React.PropTypes.func
	},
	_onBuyItem: function(){
		this.props.onBuyItem();
	},
	render: function(){
		return (
			<div className="ui small form">
				<div className="field">
					<label>Tên người mua</label>
					<InputText type="web"/>
				</div>
				<div className="field">
					<label>Email</label>
					<InputText type="web"/>
				</div>
				<div className="field">
					<label>Số điện thoại</label>
					<InputText type="web"/>
				</div>
				<div className="field">
					<label>Địa chỉ</label>
					<InputText type="web"/>
				</div>
				<button className="ui primary button" onClick={this._onBuyItem}>Mua áo</button>
			</div>
		)
	}
})