module.exports = React.createClass({
	propTypes: {
		header: React.PropTypes.string
	},
	componentDidMount: function(){
		$(this.refs.modal).modal({
			detachable: false,
			transition: 'fade'
		});
	},
	show: function(){
		$(this.refs.modal).modal('show');
	},
	hide: function(){
		$(this.refs.modal).modal('hide');
	},
	render: function(){
		return (
			<div className="ui small modal" ref="modal">
				<i className="close icon"></i>
			  	<div className="header">
			    	{this.props.header}
			  	</div>
			  	<div className="content">
			  		{this.props.children}
			  	</div>
			</div>
		)
	}
})