<<<<<<< HEAD
import React from 'react';
import './ClubFund.css'

const ClubFund = (props) => {
    console.log(props.fund);
    const { fund } = props;
    // const { name } = props.fund
    let total = 0;
    for (const each of fund) {
        total = total + each.cash;
    }
    let name = 'empty';
    for (const nam of fund) {
        if (name === 'empty') {
            name = ''
            name = name + nam.name;
        }
        else {
            name = name + ', ' + nam.name;
        }


    }
    return (
        <div className='cash-summary'>
            <h2>Club Cash summary</h2>
            <hr />
            <h4><span>Member Selected: </span>{props.fund.length}</h4>
            <h4><span>Selected: </span>{name}</h4>
            <h4><span>Selected Members Cash: </span>${total}</h4>
            <button className='review-button'>Review</button>
        </div>
    );
};

=======
import React from 'react';
import './ClubFund.css'

const ClubFund = (props) => {
    console.log(props.fund);
    const { fund } = props;
    // const { name } = props.fund
    let total = 0;
    for (const each of fund) {
        total = total + each.cash;
    }
    let name = 'empty';
    for (const nam of fund) {
        if (name === 'empty') {
            name = ''
            name = name + nam.name;
        }
        else {
            name = name + ', ' + nam.name;
        }


    }
    return (
        <div className='cash-summary'>
            <h2>Club Cash summary</h2>
            <hr />
            <h4><span>Member Selected: </span>{props.fund.length}</h4>
            <h4><span>Selected: </span>{name}</h4>
            <h4><span>Selected Members Cash: </span>${total}</h4>
            <button className='review-button'>Review</button>
        </div>
    );
};

>>>>>>> eef872ad41ecbf2e138463654d8874623eb986b0
export default ClubFund;