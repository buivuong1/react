import React, {Component, PropTypes} from 'react'
import {FormChunks} from '../chunks'

class Form extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'form'
    }
    componentDidMount(){
        var self = this
        FormChunks().then(forms => {})
    }
    render(){
        var className = (!this.props.className)?'ui form':'ui '+this.props.className+' form'
        return (
            React.createElement(this.props.type, {className: className, ref: 'form'}, this.props.children)
        )
    }
}

export default Form