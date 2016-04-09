import React, {Component, PropTypes} from 'react'

class Field extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'field':this.props.className+' field'
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}

export default Field