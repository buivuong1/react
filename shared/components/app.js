import React from 'react'
import * as M from 'modules'

class App extends React.Component{
    render(){
        return (
            <M.Container>
                {this.props.children}
            </M.Container>
        )
    }
}

export default App