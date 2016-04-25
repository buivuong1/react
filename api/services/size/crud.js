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
    },
    edit: function(body){
        var id = body.id;
        delete body.id;
        var defer = Q.defer();
        knex('size')
        .where('id', id)
        .update(body)
        .then(function(){
            defer.resolve();
        })
        .catch(function(error){
            defer.reject(error);
        })
        return defer.promise
    },
    delete: function(body){
        var defer = Q.defer();
        knex('size')
        .where('id', body.id)
        .update({deleted: 1})
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