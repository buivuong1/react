var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var db = {};

var sequelize = require('../config/database');

fs
.readdirSync(__dirname)
.filter(function(file){
    return (file.indexOf(".") !== 0) && (file !== "index.js");
})
.forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

for(var modelName in db){
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;