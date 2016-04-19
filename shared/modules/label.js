import React, {Component, PropTypes} from 'react'

class Label extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'div'
    }
    hide(){
        $(this.refs.label).css({display: 'none'})
    }
    show(){
        $(this.refs.label).css({display: 'inline-block'})  
    }
    render(){
        var className = (!this.props.className)?'ui label':'ui '+this.props.className+' label'
        return (
            React.createElement(this.props.type, {className: className, ref: 'label'}, this.props.children)
        )
    }
}

export default Label