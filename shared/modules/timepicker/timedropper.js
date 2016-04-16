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
    setValue(value){
        $(this.refs.timedropper).val(value)
        $(this.refs.timedropper).timeDropper(this.props.options)
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