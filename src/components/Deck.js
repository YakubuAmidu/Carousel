import React, { Component, Fragment } from 'react';
import picsum1 from '../img/picsum1.png';
import picsum2 from '../img/picsum2.png';
import picsum3 from '../img/picsum3.png';
import Card from './Card';

class Deck extends Component{
    constructor(props){
        super(props)
        this.state = {
            cards: [
                <Card picsum={picsum1} id="one" key="one"/>,
                <Card picsum={picsum2} id="two" key="two" />,
                <Card picsum={picsum3} id="three" key="three" />   
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
    view_port: {
        margin: 0,
        padding: 0,
        width: "500px",
        height: '300px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // overflow: 'hidden'
    },
    images_container: {
        margin: 0,
        padding: 0,
        width: "inherit",
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}

export default Deck;
