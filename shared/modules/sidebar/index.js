import React, {Component, PropTypes} from 'react'

class Sidebar extends Component{
    static propTypes = {
        className: PropTypes.string
    }
    show(id=0){
        if(id !== 0){
            $(this.refs.sidebar).sidebar({
                transition: 'overlay',
                context: $('#'+id)
            })
        }
        $(this.refs.sidebar).sidebar('show')
    }
    hide(){
        $(this.refs.sidebar).sidebar('hide')  
    }
    render(){
        return (
            <nav ref="menu" className="panel" role="navigation">

            </nav>
        )
    }
}

export default Sidebar