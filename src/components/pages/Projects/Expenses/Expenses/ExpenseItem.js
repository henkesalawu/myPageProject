import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//stateless component = presentetional/dumb component
//to output data
//no state
function ExpenseItem({date, title, amount}) {

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">£{amount}</div>
            </div>
        </Card>
        </li>
    );
}

export default ExpenseItem;