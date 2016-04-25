import React, {Component, PropTypes} from 'react'

class Icon extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'icon':this.props.className+' icon'
        return (
            <i className={className}/>
        )
    }
}

export default Icon