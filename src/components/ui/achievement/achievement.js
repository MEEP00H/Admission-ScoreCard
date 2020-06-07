import React from 'react';
import './achievement.css';

const achievement = (props) => {
    return (
            <div className = 'achieve'>
                <img src = {props.achieveImage} alt = 'AchievementImage' className = 'achieveImage'/>
            </div>
            )
}

export default achievement;