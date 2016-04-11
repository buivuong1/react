import React, {Component, PropTypes} from 'react'
import {ListChunks} from '../chunks'

class List extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    componentDidMount(){
        var self = this
        ListChunks().then(lists => {})
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