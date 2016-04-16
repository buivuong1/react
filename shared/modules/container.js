import React, {Component, PropTypes} from 'react'

class Container extends Component{
    static propTypes = {
        className: PropTypes.string
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