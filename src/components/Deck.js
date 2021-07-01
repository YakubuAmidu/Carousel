import React, { Component, Fragment } from 'react';
import picsum1 from '../img/picsum1.png';
import picsum2 from '../img/picsum2.png';
import picsum3 from '../img/picsum3.png';
import leftArrow from '../img/left-arrow.png';
import rightArrow from '../img/right-arrow.png';
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

    componentDidMount(){
        this.number_of_cards_by_index = this.images.children.length - 1;
        this.middle_card_by_index = Math.floor(this.number_of_cards_by_index / 2);
        

        /******************* RESPONSIVE CODE ******************/
        let img_width_as_percentage = 50;
        // img_width_as_percentage = window.innerWidth < 768 ? 100 : img_as_percentage;

        this.new_width = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (img_width_as_percentage / 100) * window.screen.width :
        (img_width_as_percentage / 100) * window.innerWidth;

         this.view_port.style.width = `${this.new_width}px`;

        this.order_cards();

        window.addEventListener('resize', () => {
            img_width_as_percentage = 50;
            // img_width_as_percentage = window.innerWidth < 768 ? 100 : img_as_percentage;
    
            this.new_width = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? (img_width_as_percentage / 100) * window.screen.width :
            (img_width_as_percentage / 100) * window.innerWidth;
    
             this.view_port.style.width = `${this.new_width}px`;
    
            this.order_cards();
    
        })
        /*******************************************************/

        /*********************BUTTON NAVIGATION******************/
        /********************************************************/

        /*********************AUTOPLAY CODE***********************/
        /**********************************************************/
    }

    order_cards = () => {
        //const card_width = parseFloat(getComputedStyle(this.images.children[0]).width);
        let counter_for_right = 1;
        let counter_for_left = this.middle_card_by_index;

        for(let i = 0; i < this.images.children.length; i++){
            this.images.children[i].style.transitionDuration = '0.0s';

            if(i < this.middle_card_by_index){
                this.images.children[i].style.left = `-${(counter_for_left * this.new_width) - (this.new_width / 2)}px`;
                counter_for_left--;
            } else if(i > this.middle_card_by_index){
                this.images.children[i].style.left = `${(counter_for_right * this.new_width) + (this.new_width / 2)}px`;
                counter_for_right++;
            } else {
                this.images.children[i].style.left = `${this.new_width / 2}px`;
            }
        }
    }

    render(){
        return(
            <Fragment>
                <div style={styles.nav_buttons_container}>
                    <img style={styles.nav_button} src={leftArrow} alt="prev" id="prev" />
                    <img style={styles.nav_button} src={rightArrow} alt="next" id="next" />
                </div>
                <div ref={ref_id => this.view_port = ref_id} style={styles.view_port}>
                    <div ref={ref_id => this.images = ref_id} style={styles.images_container}>
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
        //overflow: 'hidden'
        // backgroundColor: 'red'
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
    },
    nav_buttons_container: {
        margin: 0,
        padding: 0,
        width: "100vw",
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItem: 'center',
        transform: 'translate(-50%, -50%)',
        pointerEvents: "none",
        zIndex: 9999,
    },
    nav_button: {
        width: '50%',
        height: 'auto',
        pointerEvents: 'all',
        cursor: 'pointer'
    }
}

export default Deck;
