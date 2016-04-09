import React, {Component, PropTypes} from 'react'
import {MessageChunks} from '../chunks'

class Message extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    componentDidMount(){
        var self = this
        MessageChunks().then(messages => {})
    }
    render(){
        var className = (!this.props.className)?'ui message':'ui '+this.props.className+' message'
        return (
            <div className={className} ref="message">
                {this.props.children}
            </div>
        )
    }
}

export default Message