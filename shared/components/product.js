import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'
import * as M from 'modules'

class Product extends Component{
    static modules = [
        'timedropper',
        'timepicki'
    ]
    constructor(props){
        super(props)
        this._onClick = this._onClick.bind(this)
    }
    _onClick(){
        //window.location.href = '/about/1'
        this.refs.timeDropper.setValue('2:40')
        this.refs.timePicki.setValue('2:80')
        console.log(this.refs.timePicki.getValue())
    }
    render(){
        return (
            <M.Grid className="three column very relaxed">
                <Helmet
                    title="Product"/>
                <M.Column>
                    <M.TimeDropper ref="timeDropper"/>
                    <M.TimePicki ref="timePicki"/>
                    <a onClick={this._onClick}>About 1</a>
                </M.Column>
            </M.Grid>
        )
    }
}

export default Product