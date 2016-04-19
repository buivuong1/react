import React, {Component, PropTypes} from 'react'

class TextArea extends Component{
    static propTypes = {
        className: PropTypes.string,
        placeholder: PropTypes.string
    }
    getValue(){
        return $(this.refs.input).val()
    }
    render(){
        return (
            <textarea placeholder={this.props.placeholder} ref="input"/>
        )
    }
}

export default TextArea