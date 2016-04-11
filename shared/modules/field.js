import React, {Component, PropTypes} from 'react'

class Field extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    render(){
        var type = (this.props.type !== 'group')?'field':'fields'        
        var className = (!this.props.className)?type:this.props.className+' '+type
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}

export default Field