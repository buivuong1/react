var SizeCRUDService = require('../services/size/crud');
var moment = require('moment');

module.exports = {
    postAdd: function(req, res){
        var current_date = moment().format('YYYY-MM-DD HH:mm:ss')
        var body = {
            name: req.body.name,
            desc: req.body.desc,
            created_at: current_date,
            updated_at: current_date,
            created_by: 1,
            updated_by: 1
        }
        SizeCRUDService.add(body)
        .then(function(){
            res.json({message: 'success'});
        })
        .catch(function(error){
            res.status(400).json(error);
        })
    }
}