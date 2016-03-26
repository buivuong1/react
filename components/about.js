import React from 'react';

export default class AboutComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            name: ''
        }
    }
    loadServerData(){
        this.setState({name: 'Tata'});
    }
    componentDidMount(){
        var self = this;
        this.intervalId = setInterval(function(){
            self.loadServerData();
        }, 3000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){
        return (
            <div>
                {this.state.name}
                <p>A little bit about me</p>
            </div>
        )
    }
}