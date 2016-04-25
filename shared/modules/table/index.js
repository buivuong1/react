import React, {Component, PropTypes} from 'react'

class Table extends Component{
    static propTypes = {
        className: PropTypes.string,
        options: PropTypes.object
    }
    static defaultProps = {
        options: {}
    }
    init(options={}){
        $(this.refs.table).DataTable({...this.props.options, ...options})
    }
    render(){
        var className = (!this.props.className)?'ui table':'ui '+this.props.className+' table'
        return (
            <table className={className} ref="table">
                {this.props.children}
            </table>
        )
    }
}

export default Table