var TypeCRUDService = require('../services/type/crud');
var TypeListService = require('../services/type/list');
var moment = require('moment');

module.exports = {
    postAdd: function(req, res){
        var current_date = moment().format('YYYY-MM-DD HH:mm:ss');
        var body = {
            name: req.body.name,
            desc: req.body.desc,
            table_id: req.body.table_id,
            created_at: current_date,
            updated_at: current_date,
            created_by: 1,
            updated_by: 1
        }
        TypeCRUDService.add(body)
        .then(function(){
            res.json('success');
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    },
    postEdit: function(req, res){
        var current_date = moment().format('YYYY-MM-DD HH:mm:ss');
        var body = {
            id: req.body.id,
            name: req.body.name,
            table_id: req.body.table_id,
            desc: req.body.desc,
            updated_by: 1,
            updated_at: current_date
        }
        TypeCRUDService.edit(body)
        .then(function(){
            res.json('success');
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    },
    postDelete: function(req, res){
        var body = {
            id: req.body.id
        }
        TypeCRUDService.delete(body)
        .then(function(){
            res.json('success');
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    },
    getListAll: function(req, res){        
        TypeListService.listAll()
        .then(function(list){
            res.json(list);
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    },
    postDetail: function(req, res){
        TypeListService.detail({id: req.body.id})
        .then(function(list){
            res.json(list);
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    }
}