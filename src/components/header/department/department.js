import React from 'react';
import './department.css';

const department = (props) => {
    return (
        <div>
            <div className = 'faculty'>
                {props.faculty}
            </div>
            <div className = 'branch'>
                {props.branch}
            </div>
            <div className = 'university'>
                {props.university}
            </div>
        </div>
    )
}

export default department;