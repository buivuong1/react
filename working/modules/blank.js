module.exports = React.createClass({
	render: function(){
		return (
			<div className="ui container">
				{this.props.children}
			</div>
		)
	}
})