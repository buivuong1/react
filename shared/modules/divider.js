import React, {Component, PropTypes} from 'react'

class Divider extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'div'
    }
    render(){
        var className = (!this.props.className)?'ui divider':'ui '+this.props.className+' divider'
        return (
            React.createElement(this.props.type, {className: className, ref: 'divider'}, this.props.children)
        )
    }
}

export default Divider