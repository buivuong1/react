import React, {Component, PropTypes} from 'react'

class Segment extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    hideLoader(){
        $(this.refs.segment).removeClass('loading')
    }
    render(){
        var className = (!this.props.className)?'ui segment':'ui '+this.props.className+' segment'
        return (
            <div className={className} ref="segment">
                {this.props.children}
            </div>
        )
    }
}

export default Segment