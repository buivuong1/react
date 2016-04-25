import React, {Component, PropTypes} from 'react'
import Breadcrumb from '../../../modules/breadcrumb'
import Icon from '../../../modules/icon'

class Header extends Component{
    constructor(props){
        super(props)
        this.list = []
    }
    init(list){
        this.list = list
        this.forceUpdate()
    }
    render(){
        return (
            <Breadcrumb>
                <a className="section" href="/admin/home">Trang chu</a>
                <Icon className="right chevron divider"/>
                {
                    this.list.map((l, index) => {
                        if(typeof l.active !== 'undefined' && l.active === true)
                            var link = (
                                <span key={index}>
                                    <a className="active section">{l.name}</a>
                                </span>
                            )
                        else
                            var link = (
                                <span key={index}>
                                    <a className="section" href={l.url}>{l.name}</a>
                                    <Icon className="right chevron divider"/>
                                </span>
                            )
                        return link
                    }, this)
                }
            </Breadcrumb>
        )
    }
}

export default Header