import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Grid, Row, Column, Button, Label, Divider} from '../modules'

class About extends Component{
    render(){
        return (
            <Grid className="three column very relaxed">
                <Helmet
                    title="About"/>
                About
            </Grid>
        )
    }
}

export default About