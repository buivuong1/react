import React, {Component, PropTypes} from 'react'
import {LabelChunks} from '../chunks'

class Label extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'div'
    }
    componentDidMount(){
        var self = this
        LabelChunks().then(buttons => {})
    }
    render(){
        var className = (!this.props.className)?'ui label':'ui '+this.props.className+' label'
        return (
            React.createElement(this.props.type, {className: className, ref: 'label'}, this.props.children)
        )
    }
}

export default Label