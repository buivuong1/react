import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import {routes} from './routes';

import {browserHistory} from 'react-router';

ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
)