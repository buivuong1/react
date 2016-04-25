var knex = require('../../config/database');
var Q = require('q');

var List = {
    listAll: function(){
        var defer = Q.defer();
        knex('table')
        .select('id', 'name', 'created_at')
        .where('deleted', 0)
        .orderBy('created_at', 'desc')
        .then(function(list){
            defer.resolve(list);
        })
        .catch(function(error){
            defer.reject(error);
        })
        return defer.promise
    },
    detail: function(body){
       var defer = Q.defer();
        knex('table')
        .select()
        .where({
            id: body.id,
            deleted: 0
        })
        .where('id', body.id)
        .then(function(list){
            defer.resolve(list);
        })
        .catch(function(error){
            defer.reject(error);
        })
        return defer.promise 
    }
}

module.exports = List;