import React from 'react'
import Container from '../modules/base/container'

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