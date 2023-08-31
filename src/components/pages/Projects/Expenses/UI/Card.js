import React from 'react';
import './Card.css';

function Card(props) {
    const classes = 'expense_card ' + props.className;
    
    return <div className={classes}>{props.children}</div>
}

export default Card;