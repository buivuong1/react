import React, {Component, PropTypes} from 'react'
import {ItemChunks} from '../chunks'

class Item extends Component{
    static propTypes = {
        className: PropTypes.string,
        single: PropTypes.bool
    }
    componentDidMount(){
        var self = this
        ItemChunks().then(items => {})
    }
    render(){
        var single = (!this.props.single)?'ui ':''
        var className = (!this.props.className)?single+' item':single+this.props.className+' item'
        return (
            <div className={className} ref="item">
                {this.props.children}
            </div>
        )
    }
}

export default Item