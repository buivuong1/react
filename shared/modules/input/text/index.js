import React, {Component, PropTypes} from 'react'

class InputText extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string
    }
    static defaultProps = {
        type: 'text'
    }
    getValue(){
        return $(this.refs.input).val()
    }
    render(){
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} ref="input"/>
        )
    }
}

export default InputText