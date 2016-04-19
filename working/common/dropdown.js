module.exports = React.createClass({
	propTypes: {
		code: React.PropTypes.string,
		name: React.PropTypes.string,
		list: React.PropTypes.array,
		placeholder: React.PropTypes.string
	},
	componentDidMount: function(){
		$(this.refs.dropdown).dropdown();
	},
	setSelected: function(value){
		$(this.refs.dropdown).dropdown('set selected', value);
	},
	getValue: function(){
		return $(this.refs.dropdown).dropdown('get value');
	},
	render: function(){
		return (
			<div className="ui selection dropdown" ref="dropdown">
				<input type="hidden" ref="input"/>
				<i className="dropdown icon"/>
				<div className="default text">{this.props.placeholder}</div>
				<div className="menu">
					{
						this.props.list.map(function(item, index){
							return <div className="item" data-value={item[this.props.code]}>{item[this.props.name]}</div>
						}, this)
					}
				</div>
			</div>
		)
	}
})