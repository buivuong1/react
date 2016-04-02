import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, createMemoryHistory, RouterContext} from 'react-router';
import {Provider} from 'react-redux';
import {routes} from './shared/routes';
import * as reducers from './shared/reducers';
import promiseMiddleware from './shared/lib/promiseMiddleware';
import fetchComponentData from './shared/lib/fetchComponentData';
import {createStore, combineReducers, applyMiddleware } from 'redux';

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

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    const history = createMemoryHistory(req.url);
    const reducer = combineReducers(reducers);
    const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);
    match({routes, history}, (err, redirectLocation, renderProps) => {
        if(err){
            res.status(500).send(err.message);
        }else if(redirectLocation){
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }else if(renderProps){
                fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
                .then(()=>{
                    const InitialView = (
                        <Provider store={store}>
                            <RouterContext {...renderProps}/>
                        </Provider>
                    );
                    const componentHTML = renderToString(InitialView);
                    const initialState = store.getState();
                    res.render('index', {componentHTML, initialState});
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