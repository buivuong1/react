import express from 'express';
import http from 'http';

const app = express();

var compress = require('compression');
app.use(compress({
    threshold : 0, // or whatever you want the lower threshold to be
     filter    : function(req, res) {
        var ct = res.get('content-type');
        return true;
     }
}));

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/bower_components/favicon.ico'));

app.use('/public', express.static('public'));
app.use(express.static('bower_components'));

app.set('view engine', 'ejs');

var router = express.Router();
require('./routes')(router);
app.use('/', router);

const server = http.createServer(app);

server.listen(3000);
server.on('listening', ()=>{
    console.log('Listening on 3000');
});