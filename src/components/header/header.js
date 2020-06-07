import React from 'react';
import './header.css';

import Hart from '../ui/hart/hart';
import Logo from '../ui/logo/logo';

import Department from './department/department';


const header = (props) => {
    return(
        <div className = 'header'>
            <div className="grid-container">
                <div className="grid-item">
                    <Logo logoImage = {props.logoImage}/>
                </div>
                <div className="grid-item">
                    <Department 
                        faculty = {props.faculty}
                        branch = {props.branch}
                        university = {props.university}
                    />
                </div>
                <div className="grid-item">
                    <Hart 
                        hart = {props.hart}
                        like = {props.like}
                    />
                </div>
            </div>
            <div className = 'underlineHeader'/>
        </div>
    )
}
export default header;