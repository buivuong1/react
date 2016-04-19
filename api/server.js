var express = require('express');
var http = require('http');
var cors = require('cors');

var app = express();

var compress = require('compression');
app.use(compress({
    threshold : 0, // or whatever you want the lower threshold to be
     filter    : function(req, res) {
        var ct = res.get('content-type');
        return true;
     }
}));

app.use(cors());

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var router = express.Router();
require('./routes')(router);
app.use('/', router);

var server = http.createServer(app);

server.listen(4000);
server.on('listening', function(){
    console.log('Listening on 4000');
});
/*models.sequelize.sync().then(function(){
    server.listen(4000);
    server.on('listening', function(){
        console.log('Listening on 4000');
    });
})*/