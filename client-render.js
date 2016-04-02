import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory, match} from 'react-router'
import {Provider} from 'react-redux'
import * as reducers from './shared/reducers'
import {routes} from './shared/routes'
import promiseMiddleware from './shared/lib/promiseMiddleware'
import immutifyState from './shared/lib/immutifyState'
import {createStore, combineReducers, applyMiddleware } from 'redux'

const initialState = immutifyState(window.__INITIAL_STATE__)
const reducer = combineReducers(reducers)
const store   = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState)

render(
    <Provider store={store}>
        <Router routes={routes} history={browserHistory}/>
    </Provider>,
    document.getElementById('app')
)