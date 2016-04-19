import React, {Component, PropTypes} from 'react'

class Message extends Component{
    static propTypes = {
        className: PropTypes.string
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