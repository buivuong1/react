module.exports = React.createClass({
	propTypes: {
		value: React.PropTypes.number,
		min: React.PropTypes.number,
		max: React.PropTypes.number,
		step: React.PropTypes.number,
		onSlide: React.PropTypes.func
	},
	setValue: function(value){
		$(this.refs.input).val(value).change();
	},
	componentDidMount: function(){
		var self = this;
		$(this.refs.input).rangeslider({
			polyfill: false,
			onSlide: function(position, value){
				self.props.onSlide(position, value);
			}
		});
	},
	render: function(){
		return (
			<input type="range" ref="input"
				value={this.props.value}
				min={this.props.min}
				max={this.props.max}
				step={this.props.step}/>
		)
	}
})