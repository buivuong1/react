import React from 'react'
import {Link} from 'react-router'
import {Container} from '../modules'

class App extends React.Component{
    render(){
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

export default App