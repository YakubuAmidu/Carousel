import React, { Component } from 'react';
import Card from './Card';

class Deck extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                <Card />
            </div>
        )
    }
}

export default Deck;
