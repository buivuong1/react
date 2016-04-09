import React, {Component, PropTypes} from 'react'

class FormInput extends Component{
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string
    }
    static defaultProps = {
        type: 'text'
    }
    render(){
        return (
            <input type={this.props.type} placeholder={this.props.placeholder}/>
        )
    }
}

export default FormInput