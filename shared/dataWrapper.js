import React,{Component} from 'react'

class DataWrapper extends Component{
    getChildContext(){
        return {
            data: this.props.data
        }
    }
    render(){
        return this.props.children
    }
}

DataWrapper.childContextTypes = {
    data: React.PropTypes.object
}

export default DataWrapper