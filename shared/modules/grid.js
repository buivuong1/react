import React, {Component, PropTypes} from 'react'

class Grid extends Component{
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    }
    render(){
        var className = (!this.props.className)?'ui grid':'ui '+this.props.className+' grid'
        return (
            <div className={className} ref="grid" style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

export default Grid