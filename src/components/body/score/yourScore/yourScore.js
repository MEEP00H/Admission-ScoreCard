import React from 'react';
import './yourScore.css'

const yourScore = (props) => {
    return (
        <div className = 'yourScore'>
            <div className = 'scoreIs'>คะแนนของคุณคือ</div>
            <div className = 'score'>{props.yourScore}</div>
        </div>
    )
}

export default yourScore;