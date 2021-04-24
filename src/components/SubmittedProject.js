import React from 'react';
import './SubmittedProject.css';

export default function SubmittedProject(props) {
    const { projectId, student_name, date_submitted } = props;
    return(
        <div className="container">
            <div className="student">
                <h4>TEST SubmittedProject</h4>
            </div>
            <div className="student">
                <h4>TEST SubmittedProject</h4>
            </div>
            <div className="student">
                <h4>TEST SubmittedProject</h4>
            </div>
            <div className="student">
                <h4>TEST SubmittedProject</h4>
            </div>
        </div>
    )
}