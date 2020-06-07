import React from 'react';
import './user.css';

const userImage = (props) => {
    return (
        <div>
            <img src = {props.userImage} alt = 'userImage' className = 'userImage'/>
        </div>
    )
}

export default userImage;