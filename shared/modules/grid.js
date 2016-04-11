import React, {Component, PropTypes} from 'react'
import {GridChunks} from '../chunks'

class Grid extends Component{
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    }
    componentDidMount(){
        var self = this
        GridChunks().then(grids => {})
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