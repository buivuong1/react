import React, {Component, PropTypes} from 'react'

class Content extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'content':this.props.className+' content'
        return (
            <div className={className}>
                {this.props.children}
            </div>
        )
    }
}

export default Content