var InputText = require('common/inputText');
var InputPassword = require('common/inputPassword');
var UsersService = require('modules/users/services');

module.exports = React.createClass({
	_onLogin: function(){
		UsersService.PostLogin()
		.then(function(response){
			console.log(response);
		})
	},
	render: function(){
		return (
			<div className="ui fluid container">
				<div className="ui two column centered grid">
					<div className="column loginBox">
						<div className="ui raised segment">
							<div className="ui form">
								<div className="field">
									<label>Tên tài khoản</label>
									<InputText type="web" ref="firstName" placeholder="Tên tài khoản"/>
								</div>
								<div className="field">
									<label>Mật khẩu</label>
									<InputPassword type="web" ref="password" placeholder="Mật khẩu"/>
								</div>
								<button className="ui primary button"
									onClick={this._onLogin}>
									Đăng nhập
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})