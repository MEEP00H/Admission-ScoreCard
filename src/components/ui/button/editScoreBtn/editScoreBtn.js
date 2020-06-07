import React from 'react';
import './editScore.css';

const editScoreBtn = (props) => {
    return(
        <div className = 'editScoreBtn'>
            <div className = 'textEditBtn'>
                แก้ไขคะแนน
            </div>
            
            <img src = {props.editBtn} alt = 'editBtn' className = 'editBtmImg'/>
        </div>
    )
}

export default editScoreBtn;