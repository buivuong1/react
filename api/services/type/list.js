var knex = require('../../config/database');
var Q = require('q');

var List = {
    listAll: function(){
        var defer = Q.defer();
        knex('type')
        .join('table', 'type.table_id', '=', 'table.id')
        .select('type.id', 'table.name as table_name', 'type.name', 'type.created_at')
        .where('type.deleted', 0)
        .orderBy('type.created_at', 'desc')
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
        knex('type')
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