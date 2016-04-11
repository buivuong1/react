import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Grid, Row, Column, Form, Field, FormInput, Button} from '../../modules'

class UserProfile extends Component{
    render(){
        return (
            <Grid>
                <Helmet title="User Profile"/>
                <Row>
                    <Column>
                        <Form type="div">
                            <Field>
                                <Field type="group" className="two">
                                    <Field>
                                        <label>First Name</label>
                                        <FormInput type="text" placeholder="First Name"/>
                                    </Field>
                                    <Field>
                                        <label>Last Name</label>
                                        <FormInput type="text" placeholder="Last Name"/>
                                    </Field>
                                </Field>
                            </Field>
                        </Form>
                    </Column>
                </Row>
            </Grid>
        )
    }
}

export default UserProfile