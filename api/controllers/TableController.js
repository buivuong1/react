var TableCRUDService = require('../services/table/crud');
var TableListService = require('../services/table/list');
var moment = require('moment');

module.exports = {
    postAdd: function(req, res){
        var current_date = moment().format('YYYY-MM-DD HH:mm:ss');
        var body = {
            name: req.body.name,
            desc: req.body.desc,
            created_at: current_date,
            updated_at: current_date,
            created_by: 1,
            updated_by: 1
        }
        TableCRUDService.add(body)
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
            desc: req.body.desc,
            updated_by: 1,
            updated_at: current_date
        }
        TableCRUDService.edit(body)
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
        TableCRUDService.delete(body)
        .then(function(){
            res.json('success');
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    },
    getListAll: function(req, res){        
        TableListService.listAll()
        .then(function(list){
            res.json(list);
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    },
    postDetail: function(req, res){
        TableListService.detail({id: req.body.id})
        .then(function(list){
            res.json(list);
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    }
}