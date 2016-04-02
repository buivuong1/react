import React, {PropTypes, Component} from 'react'
import Immutable from 'immutable'
import {bindActionCreators} from 'redux'
import * as TodoActions from '../actions/TodoActions'
import {connect} from 'react-redux'

class Product extends Component{
    static propTypes = {
        todos: PropTypes.any.required,
        dispatch: PropTypes.func.isRequired
    }
    static needs = [
        TodoActions.getTodos
    ]
    render(){
        const {todos, dispatch} = this.props
        console.log(todos.get(0))
        return (
            <div>
                <h1>Product</h1>
                {todos.get(2)}
            </div>
        )
    }
}

export default connect(state => ({todos: state.todos}))(Product)