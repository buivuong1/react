import React, {Component, PropTypes} from 'react'

class Breadcrumb extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    render(){
        var className = (!this.props.className)?'ui breadcrumb':'ui '+this.props.className+' breadcrumb'
        return (
            <div className={className} ref="breadcrumb">
                {this.props.children}
            </div>
        )
    }
}

export default Breadcrumb