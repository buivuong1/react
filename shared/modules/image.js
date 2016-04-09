import React, {Component, PropTypes} from 'react'
import {ImageChunks} from '../chunks'

class Image extends Component{
    static propTypes = {
        className: PropTypes.string,
        src: PropTypes.string
    }
    componentDidMount(){
        var self = this
        ImageChunks().then(images => {})
    }
    render(){
        return (
            <img ref="image" src={this.props.src}/>
        )
    }
}

export default Image