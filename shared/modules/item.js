import React, {Component, PropTypes} from 'react'

class Item extends Component{
    static propTypes = {
        className: PropTypes.string,
        single: PropTypes.bool
    }
    render(){
        var single = (!this.props.single)?'ui ':''
        var className = (!this.props.className)?single+' item':single+this.props.className+' item'
        return (
            <div className={className} ref="item">
                {this.props.children}
            </div>
        )
    }
}

export default Item