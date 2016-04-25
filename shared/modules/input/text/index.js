import React, {Component, PropTypes} from 'react'

class InputText extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func
    }
    static defaultProps = {
        type: 'text'
    }
    getValue(){
        return $(this.refs.input).val()
    }
    setValue(value){
        $(this.refs.input).val(value)
    }
    render(){
        return (
            <input type={this.props.type} placeholder={this.props.placeholder}
                onChange={this.props.onChange} ref="input"/>
        )
    }
}

export default InputText