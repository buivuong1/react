import React, {Component, PropTypes} from 'react'

class Input extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'ui input':'ui '+this.props.className+' input'
        return (
            <div className={className} ref="input">
                {this.props.children}
            </div>
        )
    }
}

export default Input