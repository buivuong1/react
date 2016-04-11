import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Grid, Row, Column, Button, Content, Label} from '../../modules'

class Doc extends Component{
    render(){
        return (
            <Grid>
                <Helmet
                    title="Button Component"/>
                <Row>
                    <Column>
                        <Button>Basic Button</Button>
                        <Button className="primary">Primary Button</Button>
                        <Button className="secondary">Secondary Button</Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button className="animated">
                            <Content className="visible">Next</Content>
                            <Content className="hidden">
                                <i className="right arrow icon"/>
                            </Content>
                        </Button>
                        <Button className="labeled" type="div">
                            <Button type="div">
                                <i className="heart icon"/> Like
                            </Button>
                            <Label className="basic" type="a">2048</Label>
                        </Button>
                        <Button group={true} type="div">
                            <Button>One</Button>
                            <Button>Two</Button>
                            <Button>Three</Button>
                        </Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button group={true} type="div">
                            <Button>Cancel</Button>
                            <div className="or"/>
                            <Button className="positive">Save</Button>
                        </Button>
                        <Button className="disabled">Disabled</Button>
                        <Button className="active">Active</Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button className="basic loading">Loading</Button>
                        <Button className="facebook">
                            <i className="facebook icon"/>
                            Facebook
                        </Button>
                        <Button className="google plus">
                            <i className="google plus icon"/>
                            Google Plus
                        </Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button className="mini">Mini</Button>
                        <Button className="tiny">Tiny</Button>
                        <Button className="small">Small</Button>
                        <Button className="medium">Medium</Button>
                        <Button className="large">Large</Button>
                        <Button className="big">Big</Button>
                        <Button className="huge">Huge</Button>
                        <Button className="massive">Massive</Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button className="right floated">Right Floated</Button>
                        <Button className="left floated">Left Floated</Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button className="red">Red</Button>
                        <Button className="orange">Orange</Button>
                        <Button className="yellow">Yellow</Button>
                        <Button className="olive">Olive</Button>
                        <Button className="green">Green</Button>
                        <Button className="teal">Teal</Button>
                        <Button className="blue">Blue</Button>
                        <Button className="pink">Violet</Button>
                        <Button className="brown">Brown</Button>
                        <Button className="grey">Grey</Button>
                        <Button className="black">Black</Button>
                        <Button className="purple">Purple</Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button className="compact labeled icon">
                            <i className="pause icon"/>
                            Compact
                        </Button>
                        <Button className="positive">Positive</Button>
                        <Button className="negative">Negative</Button>
                        <Button className="fluid">Fluid</Button>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Button className="circular facebook icon">
                            <i className="facebook icon"/>
                        </Button>
                        <Button className="circular google plus icon">
                            <i className="google plus icon"/>
                        </Button>
                    </Column>
                </Row>
            </Grid>
        )
    }
}

export default Doc