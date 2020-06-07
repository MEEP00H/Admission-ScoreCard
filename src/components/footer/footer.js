import React from 'react';
import './footer.css';

import Ratio from './ratio/ratio';
import Viewer from './viewer/viewer';
import ShareBtn from '../ui/shareBtn/shareBtn';

const footer = (props) =>{
    return  (
        <div className = 'footer'>
            <Ratio/>
            <div className = 'underlineFooter'/>
            <Viewer 
                viewer = {props.viewer}
                userImage = {props.userImage}    
            />
            <ShareBtn shareImage = {props.shareImage}/>
        </div>
    )
}

export default footer;