var models = require('../models');
var ErrorConfig = require('../config/error.js');
var async = require('async');
var Q = require('q');

var Service = {
    login: function(email, password){
        var deferred = Q.defer();
        async.waterfall([
            function(callback){
                models.users.findOne({
                    where: {email: email}
                })
                .then(function(user){
                    if(user)
                        callback(null, user);
                    else
                        deferred.reject(ErrorConfig.ERR_1);
                })
            },
            function(user, callback){
                callback(null, user);
            }
        ], function(err, result){
            deferred.resolve(result);
        })

        return deferred.promise;
    }
}

module.exports = Service;