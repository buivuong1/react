import React, {Component, PropTypes} from 'react'
import {ImageChunks} from '../chunks'

class Image extends Component{
    static propTypes = {
        className: PropTypes.string,
        src: PropTypes.string,
        semantic: PropTypes.bool
    }
    static defaultProps = {
        semantic: true
    }
    componentDidMount(){
        var self = this
        ImageChunks().then(images => {})
    }
    render(){
        var semantic = (this.props.semantic)?'ui ':''
        var className = (!this.props.className)?semantic+' image':semantic+this.props.className+' image'
        return (
            <img ref="image" src={this.props.src} className={className}/>
        )
    }
}

export default Image