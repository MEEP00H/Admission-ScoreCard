import React from 'react';
import './viewer.css';

import UserImage from '../../ui/user/user';

const viewer = (props) => {
    
    return (
        <div className = 'viewer'>
          <UserImage userImage = {props.userImage} className = 'userImage'/>
                <div className = 'textViewer'>
                    {props.viewer} คนที่สนใจ
                </div>
        </div>
    )
}

export default viewer;