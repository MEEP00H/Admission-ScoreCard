import React from 'react';
import './hart.css';

const hard = (props) => {
    if(props.like === 'like'){
        return (
            <img src = {props.hart} alt = 'hardImage' className = 'hart'/>
        )
    }  
}

export default hard ;