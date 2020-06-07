import React from 'react';
import './body.css';

import RoundOpenNow from './round/roundOpenNow/roundOpenNow';
import Round from './round/round';
import EditScoreBtn from '../ui/button/editScoreBtn/editScoreBtn';
import Achievement from '../ui/achievement/achievement';
import YourScore from '../body/score/yourScore/yourScore';

import OtherScore from './score/otherScore/otherScore';

const round = (props) => {
    
    return(
        <div className = 'body'>
            <div className="grid-wrapper">
            
                {/* -------row1------- */}
                <div className="roundOpenNowText">
                    รอบที่เปิด
                </div>
                <div className= "roundOpenNow">
                    <RoundOpenNow 
                        rounds = {props.roundOpen}
                        roundOpenNow = {props.roundOpenNow}
                        />
                </div>
                
                {/* --------row2-------- */}
                <div className= "roundNumber">
                    <Round 
                        round = { props.round }
                        roundType = { props.roundType }
                        />
                </div>
                <div className="roundType">
                    <EditScoreBtn editBtn = {props.editBtn}/>
                </div>

                {/* --------row3-------- */}
                <div className= "achieveImage">
                    <Achievement achieveImage = {props.achieveImage}/>
                </div>
                <div className="yourScore">
                    <YourScore yourScore = {props.score.yourScore}/>
                </div>
            </div>

            <OtherScore 
                lowerSixty = {props.score.lowerSixty}
                avgSixty = {props.score.avgSixty}
                overSixty = {props.score.overSixty}   
                />
            <div className = 'underlineBody'/>
        </div>
    )
}
export default round;