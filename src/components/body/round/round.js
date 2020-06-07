import React from 'react';
import './round.css';

const round = (props) => {
    return (
        <div className = 'round'>
           รอบที่ {props.round} : {props.roundType}
        </div>
    )
}

export default round;