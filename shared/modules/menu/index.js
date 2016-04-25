import React, {Component, PropTypes} from 'react'

class Menu extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'ui menu':'ui '+this.props.className+' menu'
        return (
            <div className={className} ref="menu">
                {this.props.children}
            </div>
        )
    }
}

export default Menu