import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory, match} from 'react-router'
import {routes} from './shared/routes'
import DataWrapper from './lib/dataWrapper'

const initData = window.__INITIAL_DATA__

render(
    <DataWrapper data={initData}>
        <Router routes={routes} history={browserHistory}/>
    </DataWrapper>,
    document.getElementById('app')
)