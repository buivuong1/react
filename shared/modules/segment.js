import React, {Component, PropTypes} from 'react'
import {SegmentChunks} from '../chunks'

class Segment extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    componentDidMount(){
        var self = this
        SegmentChunks().then(segments => {})
    }
    render(){
        var className = (!this.props.className)?'ui segment':'ui '+this.props.className+' segment'
        return (
            <div className={className} ref="segment">
                {this.props.children}
            </div>
        )
    }
}

export default Segment