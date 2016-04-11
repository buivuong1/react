import React, {Component} from 'react'
import Helmet from 'react-helmet'
import {Grid, Row, Column, Header, Content, List, Item, Image, Segment} from '../../modules'

class Doc extends Component{
    render(){
        return (
            <Grid>
                <Helmet title="Header"/>
                <Row>
                    <Column>
                        <Header type="h1">H1</Header>
                        <Header type="h2">H2</Header>
                        <Header type="h3">H3</Header>
                        <Header type="h4">H4</Header>
                        <Header type="h5">H5</Header>
                        <Header type="h6">H6</Header>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Header type="h2" className="icon">
                            <i className="settings icon"/>
                            <Content>
                                Account Settings
                                <div className="sub header">Manage your account settings and set e-mail preferences.</div>
                            </Content>
                        </Header>
                        <Header type="h2" className="center aligned icon">
                            <i className="circular users icon"/>
                            Friends
                        </Header>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <List className="horizontal">
                            <Item single={true}>
                                <Image className="mini circular" src="http://semantic-ui.com/images/avatar2/small/molly.png"/>
                                <Content>
                                    <Header className="sub">Molly</Header>
                                    Coordinator
                                </Content>
                            </Item>
                            <Item single={true}>
                                <Image className="mini circular" src="http://semantic-ui.com/images/avatar2/small/elyse.png"/>
                                <Content>
                                    <Header className="sub">Elyse</Header>
                                    Developer
                                </Content>
                            </Item>
                        </List>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Header type="h2">
                            <Image src="http://semantic-ui.com/images/icons/school.png"/>
                            <Content>
                                Learn More
                            </Content>
                        </Header>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Header type="h3" className="dividing">
                            Dividing Header
                        </Header>
                        <Header type="h3" className="top attached">
                            Top Attached
                        </Header>
                        <Segment className="attached">
                            <p>Content Attached</p>
                        </Segment>
                    </Column>
                </Row>
            </Grid>
        )
    }
}

export default Doc