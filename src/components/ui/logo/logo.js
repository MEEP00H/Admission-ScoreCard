import React from 'react';
import './logo.css';

const logo = (props) => {
    return (
        <div>
            <img src = {props.logoImage} alt = 'logoImage' className = 'logo'/>
        </div>
    )
}

export default logo;