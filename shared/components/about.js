import React, {Component, PropTypes} from 'react'
import {Link, browserHistory} from 'react-router'
import Helmet from 'react-helmet'
import * as M from 'modules'
import {GetTest, GetTestChild, GetTestChildNew} from 'services/test'

class About extends Component{
    constructor(props, context){
        super(props, context)
    }
    static needs = [
        {testApi: GetTest},
        {testApiChild: GetTestChild},
        {testApiChildNew: GetTestChildNew}
    ]
    _onClick(){
        window.location.href = '/product'
    }
    render(){
        console.log(this.context.data)
        return (
            <M.Grid className="three column very relaxed">
                <Helmet
                    title="About"/>
                <M.Column>
                    <a onClick={this._onClick}>Back to Product</a>
                </M.Column>
            </M.Grid>
        )
    }
}

About.contextTypes = {
    data: React.PropTypes.object
}

export default About