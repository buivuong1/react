import React, {Component, PropTypes} from 'react'
import Sidebar from '../../../modules/sidebar'
import Item from '../../../modules/item'
import Icon from '../../../modules/icon'
import Menu from '../../../modules/menu'

class AdminSidebar extends Component{
    constructor(props){
        super(props)
        this.id = 'admin'
    }
    _onToggleSidebar(){
        this.refs.sidebar.show(this.id)
    }
    componentDidMount(){
        $(this.refs.pusher).height($(window).height())
    }
    render(){
        return (
            <div id={this.id}>
                <Sidebar className="left inverted vertical menu" ref="sidebar">
                    <Item single={true} type="a">
                        <Icon className="table"/>
                        Bang
                    </Item>
                    <Item single={true} type="a">
                        <Icon className="maximize"/>
                        Kich thuoc
                    </Item>
                    <Item single={true} type="a">
                        <Icon className="adjust"/>
                        Loai
                    </Item>
                </Sidebar>
                <div className="pusher" ref="pusher">
                    <Menu className=" inverted top fixed">
                        <Item single={true} type="a" onClick={this._onToggleSidebar.bind(this)}>
                            <Icon className="sidebar"/>
                        </Item>
                        <Item single={true} type="a">
                            <Icon className="home"/>
                            Trang chu
                        </Item>
                    </Menu>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default AdminSidebar