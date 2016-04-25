import React, {Component, PropTypes} from 'react'

class Modal extends Component{
    static propTypes = {
        className: PropTypes.string,
        header: PropTypes.string.isRequired,
        options: PropTypes.object
    }
    static defaultProps = {
        options: {
            detachable: false,
            transition: 'fade'
        }
    }
    show(options={}){
        $(this.refs.modal).modal('show', {...options, ...this.props.options})
    }
    hide(){
        $(this.refs.modal).modal('hide')
    }
    render(){
        var className = (!this.props.className)?'ui modal':'ui '+this.props.className+' modal'
        return (
            <div className={className} ref="modal">
                <div className="header">
                    {this.props.header}
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default Modal