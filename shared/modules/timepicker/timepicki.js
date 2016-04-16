import React, {Component, PropTypes} from 'react'

class TimePicki extends Component{
    static propTypes = {
        options: PropTypes.object
    }
    static defaultProps = {
        options: {
            show_meridian: false
        }
    }
    componentDidMount(){
        $(this.refs.timepicki).timepicki(this.props.options)
    }
    setValue(value){
        $(this.refs.timepicki).val(value)
    }
    getValue(){
        return $(this.refs.timepicki).val()
    }
    render(){
        return (
            <input type="text" ref="timepicki" className="time_element"/>
        )
    }
}

export default TimePicki