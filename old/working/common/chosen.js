module.exports = React.createClass({
	propTypes: {
		text: React.PropTypes.string
	},
	base64Image: null,
	file: null,
	componentDidMount: function(){
		var self = this;
		var _URL = window.URL || window.webkitURL;
		$(this.refs.file).jfilestyle({input:false, buttonText: this.props.text});
		$(this.refs.file).change(function(){
			if(this.files && this.files[0]){
				self.file = this.files[0];
				var FR = new FileReader();
				FR.onload = function(event){
					self.base64Image = event.target.result;
					self.props.onChangeUpload(self.base64Image, self.file);
				}
				FR.readAsDataURL(this.files[0]);
				$(self.refs.file).jfilestyle('clear');
			}
		});
	},
	getBase64Image: function(){
		return this.base64Image;
	},
	getFile: function(){
		return this.file;
	},
	render: function(){
		return <input type="file" ref="file" accept="image/*"/>
	}
});