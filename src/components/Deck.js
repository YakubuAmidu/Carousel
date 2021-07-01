import React, { Component, Fragment } from 'react';
import picsum from '../img/picsum.png';
import Card from './Card';

class Deck extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards: [
                <Card picsum={picsum} id="one" key="one"/>,
                <Card picsum={picsum} id="two" key="two" />,
                <Card picsum={picsum} id="three" key="three" />   
            ]
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
