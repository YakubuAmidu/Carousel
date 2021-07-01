import React, { Component, Fragment } from 'react';
import Card from './Card';

class Deck extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards: []
        }
    }
    render(){
        return(
            <Fragment>
                <div style={styles.view_port}>
                    <div style={styles.images_container}>
                        {this.state.cards}
                    </div>
                </div>
            </Fragment>
        )
    }
}

const styles = {
    view_port: {},
    images_container: {}
}

export default Deck;
