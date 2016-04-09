import React, {Component, PropTypes} from 'react'

class Row extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'row':this.props.className+' row'
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}

export default Row