import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Grid, Column, Segment, Form, Field, FormInput} from '../../modules'

class UserLogin extends Component{
    render(){
        return (
            <Grid className="two column centered">
                <Helmet title="Login"/>
                <Column>
                    <Segment>
                        <Form type="div">
                            <Field>
                                <label>User Name</label>
                                <FormInput type="text" placeholder="User name"/>
                            </Field>
                            <Field>
                                <label>User Name</label>
                                <FormInput type="text" placeholder="User name"/>
                            </Field>
                        </Form>
                    </Segment>
                </Column>
            </Grid>
        )
    }
}

export default UserLogin