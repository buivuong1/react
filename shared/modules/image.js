import React, {Component, PropTypes} from 'react'

class Image extends Component{
    static propTypes = {
        className: PropTypes.string,
        src: PropTypes.string,
        semantic: PropTypes.bool
    }
    static defaultProps = {
        semantic: true
    }
    render(){
        var semantic = (this.props.semantic)?'ui ':''
        var className = (!this.props.className)?semantic+' image':semantic+this.props.className+' image'
        return (
            <img ref="image" src={this.props.src} className={className}/>
        )
    }
}

export default Image