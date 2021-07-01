import React from 'react';

function Card(props){
    return(
        <div style={styles.card} id={props.id}>
          <img style={styles.card_img} src={props.picsum} alt="ok" />
        </div>
    )
}

const styles = {
    card: {},
    card_img: {}
}

export default React.memo(Card);