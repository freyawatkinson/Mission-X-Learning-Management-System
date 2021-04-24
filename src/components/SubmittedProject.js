import React from 'react';
import './SubmittedProject.css';
import ProfilePic from "./Ellipse 38.png";

export default function SubmittedProject(props) {
    const { projectId, student_name, date_submitted } = props;
    return(
        <div className="container">

            <div className="student">
                

                <div className='avatar'>
                <img src={ProfilePic}/></div>

                <div className='details'>
                NAME wants to show you their project
                {/* {`${user.student_name} submitted their project`} */}
                </div>

                <div className='date'>Date</div>
            </div>

            <div className="student">
                
                <div className='avatar'>
                <img src={ProfilePic}/></div>
                <div className='details'>
                NAME wants to show you their project
                </div>
                <div className='date'>Date</div>
            </div>
            <div className="student">
                
                <div className='avatar'>
                <img src={ProfilePic}/></div>
                <div className='details'>
                NAME wants to show you their project
                </div>
                <div className='date'>Date</div>
            </div>
            <div className="student">
                
                <div className='avatar'>
                <img src={ProfilePic}/></div>
                <div className='details'>
                NAME wants to show you their project
                </div>
                <div className='date'>Date</div>
            </div>
        </div>
    )
}