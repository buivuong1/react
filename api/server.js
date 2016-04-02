var express = require('express');
var http = require('http');

var app = express();

var compress = require('compression');
app.use(compress({
    threshold : 0, // or whatever you want the lower threshold to be
     filter    : function(req, res) {
        var ct = res.get('content-type');
        return true;
     }
}));

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var router = express.Router();
require('./routes')(router);
app.use('/', router);

var server = http.createServer(app);
var models = require('./models');

models.sequelize.sync().then(function(){
    server.listen(4000);
    server.on('listening', function(){
        console.log('Listening on 4000');
    });
})