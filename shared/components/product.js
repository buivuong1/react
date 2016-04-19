import React, {Component, PropTypes} from 'react'
import Helmet from 'react-helmet'
import * as M from 'modules'

class Product extends Component{
    static modules = [
        'timedropper'
    ]
    constructor(props){
        super(props)
        this._onClick = this._onClick.bind(this)
    }
    componentDidMount(){
        this.refs.timeDropper.setValue('2:40')
        this.refs.timeDropper.init()
    }
    _onClick(){
        
    }
    render(){
        return (
            <M.Grid className="three column very relaxed">
                <Helmet
                    title="Product"/>
                <M.Column>
                    <M.TimeDropper ref="timeDropper"/>
                    <a onClick={this._onClick}>About 1</a>
                </M.Column>
            </M.Grid>
        )
    }
}

export default Product