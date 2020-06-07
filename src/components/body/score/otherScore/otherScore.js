import React from 'react';
import './otherScore.css';

const otherScore = (props) => {
    return (
        <div className = 'otherScore-wrapper'>
            <div className = 'lowerSixty'>
                <div className = 'numberScoreLower'>{props.lowerSixty}</div>
                <div className = 'textScoreLower' >คะแนนต่ำสุด 60</div>
            </div>
            <div className = 'avgSixty'>
                <div className = 'numberScoreAvg'>{props.avgSixty}</div>
                <div className = 'textScoreAvg'>คะแนนเฉลี่ย 60</div>
            </div>
            <div className = 'overSixty'>
                <div className = 'numberScoreOver'>{props.overSixty}</div>
                <div className = 'textScoreOver'>คะแนนสูงสุด 60</div>
            </div>
        </div>
    )
}
export default otherScore;