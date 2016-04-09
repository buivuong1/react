import React, {Component, PropTypes} from 'react'
import {DividerChunks} from '../chunks'

class Divider extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    componentDidMount(){
        var self = this
        DividerChunks().then(Dividers => {})
    }
    render(){
        var className = (!this.props.className)?'ui divider':'ui '+this.props.className+' divider'
        return (
            <div className={className} ref="divider">
                {this.props.children}
            </div>
        )
    }
}

export default Divider