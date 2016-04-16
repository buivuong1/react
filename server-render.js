import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import {routes} from './shared/routes';
import fetchComponentData from './shared/lib/fetchComponentData';
import fetchComponentModules from './shared/lib/fetchComponentModules';
import Helmet from 'react-helmet';
import DataWrapper from './shared/dataWrapper';

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

app.get('*', (req, res) => {
    match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if(err){
            res.status(500).send(err.message);
        }else if(redirectLocation){
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }else if(renderProps){
                fetchComponentData(renderProps.components, renderProps.params)
                .then((response)=>{
                    fetchComponentModules(renderProps.components)
                    .then((modules) => {
                        if(response !== 'no render'){
                            var newResponse = {};
                            response.map(r => {
                                for(let [rKey, rValue] of Object.entries(r)){
                                    newResponse[rKey] = rValue;
                                }
                            })
                            const InitialView = (
                                <DataWrapper data={newResponse}>
                                    <RouterContext {...renderProps}/>
                                </DataWrapper>
                            );
                            const componentHTML = renderToString(InitialView);
                            const initData = newResponse;
                            let head = Helmet.rewind();
                            res.render('index', {componentHTML, initData, modules, head});
                        }else{
                            res.json();
                        }
                    })
                    .catch(err => res.end(err.message))    
                })
                .catch(err => res.end(err.message))
        }else{
            res.sendStatus(404)
        }
    })
});

const server = http.createServer(app);

server.listen(3000);
server.on('listening', ()=>{
    console.log('Listening on 3000');
});