import React, {Component, PropTypes} from 'react'

class Column extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'column':this.props.className+' column'
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}

export default Column