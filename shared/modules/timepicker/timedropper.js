import React, {Component, PropTypes} from 'react'

class TimeDropper extends Component{
    static propTypes = {
        options: PropTypes.object
    }
    static defaultProps = {
        options: {
            format: 'H:m',
            meridians: false,
            setCurrentTime: false
        }
    }
    init(options){
        $(this.refs.timedropper).timeDropper({...options, ...this.props.options})
    }
    setValue(value){
        $(this.refs.timedropper).val(value)
    }
    getValue(){
        return $(this.refs.timedropper).val()  
    }
    render(){
        return (
            <input type="text" ref="timedropper"/>
        )
    }
}

export default TimeDropper