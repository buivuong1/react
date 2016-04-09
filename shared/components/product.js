import React, {PropTypes, Component} from 'react'
import {bindActionCreators} from 'redux'
import * as TodoActions from '../actions/TodoActions'
import {connect} from 'react-redux'
import Helmet from "react-helmet"

class Product extends Component{
    static propTypes = {
        todos: PropTypes.any,
        dispatch: PropTypes.func.isRequired
    }
    static needs = [
        TodoActions.getTodos
    ]
    render(){
        const {todos, dispatch} = this.props
        return (
            <div>
                <Helmet
                    title="Product"
                    meta={[
                        {"name": "description", "content": "Product description"},
                        {"property": "og:type", "content": "article"}
                    ]}
                />
                <h1>Product</h1>
            </div>
        )
    }
}

export default connect(state => ({todos: state.todos}))(Product)