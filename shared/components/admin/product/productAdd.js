import {render} from 'react-dom'
import React, {Component} from 'react'
import Grid from '../../../modules/base/grid'
import Column from '../../../modules/base/column'

class ProductAdd extends Component{
    componentDidMount(){
        var mySlidebars = new $.slidebars({
            siteClose: false
        })
        mySlidebars.slidebars.open('left')
        $('#main-menu').smartmenus()
        $('#selectivity').chosen({
            width: '100%'
        })
    }
    render(){
        return (
            <div>
                <div id="sb-site" style={{width: '85%'}}>
                    <ul id="main-menu" className="sm sm-simple">
                        <li><a><i className="fa fa-align-justify" aria-hidden="true"></i></a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                    <div className="breadcrumb flat">
                        <a>Trang chu</a>
                        <a>Trang chu 1</a>
                        <a className="active">Trang chu 2222222</a>
                    </div>
                    <Grid>
                        <Column size="1-1">
                            <form className="pure-form pure-form-stacked">
                            <fieldset>
                                <legend>Legend</legend>
                                <Grid>
                                    <Column size="1-3">
                                        <label>First name</label>
                                        <input className="pure-u-23-24"/>
                                    </Column>
                                    <Column size="1-3">
                                        <label>First name</label>
                                        <input className="pure-u-23-24"/>
                                    </Column>
                                    <Column size="1-3">
                                        <label>First name</label>
                                        <input className="pure-u-23-24"/>
                                    </Column>
                                    <Column size="1-3">
                                        <label>First name</label>
                                        <input className="pure-u-23-24"/>
                                    </Column>
                                    <Column size="1-3">
                                        <label>First name</label>
                                        <input className="pure-u-23-24"/>
                                    </Column>
                                    <Column size="1-3">
                                        <label>First name</label>
                                        <select id="selectivity" data-placeholder="Choose... hehe" className="chosen-select" multiple={true}>
                                            <option value=""></option>
                                            <option value="a">A</option>
                                            <option value="b">B</option>
                                        </select>
                                    </Column>
                                </Grid>
                            </fieldset>
                        </form>
                        </Column>    
                    </Grid>
                </div>
                <div className="sb-slidebar sb-left sb-width-custom" data-sb-width="15%">
                    <Grid>
                        <Column size="1-3">Thirds</Column>
                        <Column size="1-3">Thirds</Column>
                        <Column size="1-3">Thirds</Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

render(
    <ProductAdd/>,
    document.getElementById('app')
)