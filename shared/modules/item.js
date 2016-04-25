import React, {Component, PropTypes} from 'react'

class Item extends Component{
    static propTypes = {
        className: PropTypes.string,
        single: PropTypes.bool,
        type: PropTypes.string,
        onClick: PropTypes.func
    }
    static defaultProps = {
        type: 'div'
    }
    render(){
        var single = (!this.props.single)?'ui ':''
        var className = (!this.props.className)?single+' item':single+this.props.className+' item'
        return (
            React.createElement(this.props.type, {className: className, ref: 'item', onClick: this.props.onClick}, this.props.children)
        )
    }
}

export default Item