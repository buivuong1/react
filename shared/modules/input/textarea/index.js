import React, {Component, PropTypes} from 'react'

class TextArea extends Component{
    static propTypes = {
        className: PropTypes.string,
        placeholder: PropTypes.string,
        onChange: PropTypes.func
    }
    getValue(){
        return $(this.refs.input).val()
    }
    setValue(value){
        $(this.refs.input).val(value)
    }
    render(){
        return (
            <textarea placeholder={this.props.placeholder} ref="input"
                onChange={this.props.onChange}/>
        )
    }
}

export default TextArea