import React, {Component, PropTypes} from 'react'
import {ContainerChunks} from '../chunks'


class Container extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    componentDidMount(){
        var self = this
        ContainerChunks().then(containers => {})
    }
    render(){
        var className = (!this.props.className)?'ui container':'ui '+this.props.className+' container'
        return (
            <div className={className} ref="container">
                {this.props.children}
            </div>
        )
    }
}

export default Container