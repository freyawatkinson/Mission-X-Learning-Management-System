import React from 'react';
import ProgressTracker from './ProgressTracker.js';


export default function StudentProgress(props) {
    const { name, completionStatus } = props;
    return (
      <div>
        {/* This div should ideally should be extracted into its own component which would be passed props */}
        <div> 
           {name}
           <br></br>
           {`${completionStatus} out of 15 projects completed`}
        </div>
        {/* This div should ideally should be extracted into its own component and the no of projects completed as props */}
        <div> 
          <div class="step-container">
            {/* This could be put in a simple loop too  */}
            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 1  ? "completeStep" : ""}`}>1</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 2  ? "completeStep" : ""}`}>2</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 3  ? "completeStep" : ""}`}>3</div>
            </div>
            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 4  ? "completeStep" : ""}`}>4</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 5  ? "completeStep" : ""}`}>5</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 6  ? "completeStep" : ""}`}>6</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 7  ? "completeStep" : ""}`}>7</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 8  ? "completeStep" : ""}`}>8</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 9  ? "completeStep" : ""}`}>9</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 10  ? "completeStep" : ""}`}>10</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 11 ? "completeStep" : ""}`}>11</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 12  ? "completeStep" : ""}`}>12</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 13  ? "completeStep" : ""}`}>13</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 14  ? "completeStep" : ""}`}>14</div>
            </div>

            <div className="step-wrapper">
            <div className={`step ${completionStatus <= 15  ? "completeStep" : ""}`}>15</div>
            </div>
            
          </div>
        </div>
      </div>
    );
  };