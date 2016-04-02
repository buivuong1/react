var AuthService = require('../services/auth.js');

var Controller = {
    postLogin: function(req, res){
        AuthService.login(req.body.email, req.body.password)
        .then(function(user){
            res.json(user);
        }, function(error){
            res.json(error);
        })
    }
}

module.exports = Controller;