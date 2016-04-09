import React, {Component, PropTypes} from 'react'
import {LabelChunks} from '../chunks'

class Label extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    componentDidMount(){
        var self = this
        LabelChunks().then(buttons => {})
    }
    render(){
        var className = (!this.props.className)?'ui label':'ui '+this.props.className+' label'
        return (
            <div className={className} ref="label">
                {this.props.children}
            </div>
        )
    }
}

export default Label