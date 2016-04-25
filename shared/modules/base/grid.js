import React, {Component, PropTypes} from 'react'

class Grid extends Component{
    render(){
        return (
            <div className="pure-g" ref="grid">
                {this.props.children}
            </div>
        )
    }
}

export default Grid