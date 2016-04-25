import React, {Component, PropTypes} from 'react'

class Button extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        onClick: PropTypes.func
    }
    static defaultProps = {
        type: 'button'
    }
    showLoader(){
        $(this.refs.button).addClass('loading')
    }
    hideLoader(){
        $(this.refs.button).removeClass('loading')
    }
    render(){
        var className = (!this.props.className)?'ui button':'ui '+this.props.className+' button'
        return (
            React.createElement(this.props.type, {className: className, ref: 'button', onClick: this.props.onClick}, this.props.children)
        )
    }
}

export default Button