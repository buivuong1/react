import React, {Component, PropTypes} from 'react'

class List extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'ui list':'ui '+this.props.className+' list'
        return (
            <div className={className} ref="list">
                {this.props.children}
            </div>
        )
    }
}

export default List