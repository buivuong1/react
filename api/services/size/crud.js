var knex = require('../../config/database');
var Q = require('q');

var CRUD = {
    add: function(body){
        var defer = Q.defer();
        knex('size')
        .insert(body)
        .then(function(){
            defer.resolve();
        })
        .catch(function(error){
            defer.reject(error);
        })
        return defer.promise
    }
}

module.exports = CRUD;