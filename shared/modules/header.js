import React, {Component, PropTypes} from 'react'

class Header extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'div'
    }
    render(){
        var className = (!this.props.className)?'ui header':'ui '+this.props.className+' header'
        return (
            React.createElement(this.props.type, {className: className, ref: 'header'}, this.props.children)
        )
    }
}

export default Header