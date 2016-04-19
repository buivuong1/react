import React, {Component, PropTypes} from 'react'

class Form extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    static defaultProps = {
        type: 'form'
    }
    render(){
        var className = (!this.props.className)?'ui form':'ui '+this.props.className+' form'
        return (
            React.createElement(this.props.type, {className: className, ref: 'form'}, this.props.children)
        )
    }
}

export default Form