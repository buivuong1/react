import React, {Component, PropTypes} from 'react'
import Icon from '../../icon'

class Dropdown extends Component{
    static propTypes = {
        className: PropTypes.string,
        defaultText: PropTypes.string,
        code: PropTypes.string,
        display: PropTypes.string,
        onChange: PropTypes.func
    }
    constructor(props){
        super(props)
        this.list = []
    }
    init(list){
        this.list = list
        const self = this
        this.forceUpdate(()=>{
            $(self.refs.dropdown).dropdown({
                onChange: function(value, text, $selectedItem){
                    if(typeof self.props.onChange !== 'undefined')
                        self.props.onChange(value, text, $selectedItem)
                }
            })
        })
    }
    getValue(){
        return $(this.refs.dropdown).dropdown('get value')
    }
    setValue(value){
        $(this.refs.dropdown).dropdown('set selected', value)
    }
    render(){
        var className = (!this.props.className)?'ui dropdown':'ui '+this.props.className+' dropdown'
        return (
            <div className={className} ref="dropdown">
                <input type="hidden" ref="hidden"/>
                <Icon className="dropdown"/>
                <div className="default text">{this.props.defaultText}</div>
                <div className="menu">
                    {
                        this.list.map((item, index)=>{
                            return (
                                <div className="item" data-value={item[this.props.code]}>{item[this.props.display]}</div>
                            )
                        }, this)
                    }
                </div>
            </div>
        )
    }
}

export default Dropdown