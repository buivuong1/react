import React, {Component, PropTypes} from 'react'
import Label from '../../modules/label'

class Field extends Component{
    constructor(props){
        super(props)
        this.message = ''
    }
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.string
    }
    componentDidMount(){
        this.refs.label.hide()
    }
    addError(){
        $(this.refs.field).addClass('error')
    }
    removeError(){
        $(this.refs.field).removeClass('error')
    }
    showError(message){
        this.message = message
        this.refs.label.show()
        this.forceUpdate()
    }
    hideError(){
        this.message = ''
        this.refs.label.hide()
        this.forceUpdate()
    }
    render(){
        var type = (this.props.type !== 'group')?'field':'fields'        
        var className = (!this.props.className)?type:this.props.className+' '+type
        return (
            <div className={className} ref="field">
                {this.props.children}
                <Label ref="label" className="pointing red basic">
                    {this.message}
                </Label>
            </div>
        )
    }
}

export default Field