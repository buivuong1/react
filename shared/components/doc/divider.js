import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Grid, Row, Column, Form, Field, Input, FormInput, Button, Divider, Segment} from '../../modules'

class Doc extends Component{
    render(){
        return (
            <Grid>
                <Helmet title="Divider"/>
                <Row>
                    <Column>
                        <Grid className="two column middle aligned very relaxed stackable">
                            <Column>
                                <Form>
                                    <Field>
                                        <label>Username</label>
                                        <Input className="left icon">
                                            <FormInput type="text" placeholder="Username"/>
                                            <i className="user icon"/>
                                        </Input>
                                    </Field>
                                    <Field>
                                        <label>Password</label>
                                        <Input className="left icon">
                                            <FormInput type="password" placeholder="Password"/>
                                            <i className="lock icon"/>
                                        </Input>
                                    </Field>
                                    <Button className="blue submit">
                                        Login
                                    </Button>
                                </Form>
                            </Column>
                            <Divider className="vertical">Or</Divider>
                            <Column className="center aligned">
                                <Button className="big green labeled icon">
                                    <i className="signup icon"/>
                                    Sign Up
                                </Button>
                            </Column>
                        </Grid>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Segment className="center aligned basic">
                            <Input className="left icon action">
                                <i className="search icon"/>
                                <FormInput type="text" placeholder="Order #"/>
                                <Button className="blue submit">Search</Button>
                            </Input>
                            <Divider className="horizontal">Or</Divider>
                            <Button className="teal labeled icon">
                                Create New Order
                                <i className="add icon"/>
                            </Button>
                        </Segment>
                    </Column>
                </Row>
            </Grid>
        )
    }
}

export default Doc