import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Grid, Column, Segment, Form, Field, FormInput, Button} from '../../modules'

class UserLogin extends Component{
    render(){
        return (
            <Grid className="two column centered" style={{marginTop: '50px'}}>
                <Helmet title="Login"/>
                <Column>
                    <Segment>
                        <Form type="div">
                            <Field>
                                <label>User Name</label>
                                <FormInput type="text" placeholder="User name"/>
                            </Field>
                            <Field>
                                <label>Password</label>
                                <FormInput type="password" placeholder="Password"/>
                            </Field>
                            <Button className="fluid">
                                Login
                            </Button>
                        </Form>
                    </Segment>
                </Column>
            </Grid>
        )
    }
}

export default UserLogin