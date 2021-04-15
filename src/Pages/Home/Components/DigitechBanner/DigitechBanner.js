import React from 'react';
import "./Digitechbanner.css"
import studentdesk from "../images/student.png"

function Digitechbanner  () {

return (

<div class="digitechinvite-container">
<div class="digitechinvite-subcon">
<div class="digitech-wrapper">
<div class="digitech-box1">
<img src={studentdesk} alt="students" />
</div>

<div class="digitech-box2">
<p className="waitingfor"> What are you waiting for? </p>
<p className="startteaching">Start teaching Digital Technologies today.</p>
<p className="needinfo">If you need more information, we are happy to answer any questions you may have.</p>
</div>

<div class="enquiresignup">
</div><a href="a" className="enquirenowbtn">
    ENQUIRE NOW </a>
    <a href="a" className="signupbtn">
        SIGN UP
    </a>
</div>
</div>
</div>

)    
}

export default Digitechbanner