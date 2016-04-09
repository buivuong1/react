import React, {Component, PropTypes} from 'react'
import {HeaderChunks} from '../chunks'

class Header extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'div'
    }
    componentDidMount(){
        var self = this
        HeaderChunks().then(headers => {})
    }
    render(){
        var className = (!this.props.className)?'ui header':'ui '+this.props.className+' header'
        return (
            React.createElement(this.props.type, {className: className, ref: 'header'}, this.props.children)
        )
    }
}

export default Header