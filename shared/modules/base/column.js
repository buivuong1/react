import React, {Component, PropTypes} from 'react'

class Column extends Component{
    static propTypes = {
        size: PropTypes.string.isRequired
    }
    render(){
        return (
            <div className={"pure-u-"+this.props.size}>
                {this.props.children}
            </div>
        )
    }
}

export default Column