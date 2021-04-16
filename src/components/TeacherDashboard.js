import React from 'react';

import "./TeacherDashboard.css";
import { Button } from '@material-ui/core';


function TeacherDashboard() {
    return (
    <div id= "dashboard">

    <div id="button-container">
    <Button color="primary" id="button3"> More Projects</Button>
    <Button color="primary" id="button2">Help Centre</Button>
    <Button color="primary" id="button1">Take Screenshot</Button>

    </div>
    <div id="dashboard-inner">
      
    <h1>Teacher Dashboard</h1>
    </div>
  </div>

    )
};

export default TeacherDashboard;