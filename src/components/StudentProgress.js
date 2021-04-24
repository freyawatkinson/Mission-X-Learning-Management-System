import React from 'react';
import ProgressTracker from './ProgressTracker.js';
import './StudentProgress.css';

export default function StudentProgress(props) {
    const { name, completionStatus } = props;
    return (
      <div className='student-progress-steps'>
        {/* This div should ideally should be extracted into its own component which would be passed props */}
        <div className='student-details'> 
        <div className="student-name">
           {name}
           </div>
           {/* <br></br> */}
           <div className="student-completion">
           {`${completionStatus} out of 15 projects completed`}
           </div>
        </div>
        {/* This div should ideally should be extracted into its own component and the no of projects completed as props */}
        <div> 
          <div class="step-container">
            {/* This could be put in a simple loop too  */}
            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 1  ? "completeStep" : "step"}`}>1</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 2  ? "completeStep" : "step"}`}>2</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 3  ? "completeStep" : "step"}`}>3</div>
            </div>
            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 4  ? "completeStep" : "step"}`}>4</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 5  ? "completeStep" : "step"}`}>5</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 6  ? "completeStep" : "step"}`}>6</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 7  ? "completeStep" : "step"}`}>7</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 8  ? "completeStep" : "step"}`}>8</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 9  ? "completeStep" : "step"}`}>9</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 10  ? "completeStep" : "step"}`}>10</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 11 ? "completeStep" : "step"}`}>11</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 12  ? "completeStep" : "step"}`}>12</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 13  ? "completeStep" : "step"}`}>13</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 14  ? "completeStep" : "step"}`}>14</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus >= 15  ? "completeStep" : "step"}`}>15</div>
            </div>
            
          </div>
        </div>
      </div>
    );
  };