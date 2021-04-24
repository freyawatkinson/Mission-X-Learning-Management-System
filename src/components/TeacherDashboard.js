import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ProgressTracker from './ProgressTracker';


import NavBar from './NavBar';

import "./TeacherDashboard.css";
import { Button } from '@material-ui/core';


function TeacherDashboard() {
    return (
    <div id= "dashboard">


    <div id="button-container">
    <Button color="primary" id="button3"> More Projects</Button>
    <Button color="primary" id="button2">Help Centre</Button>
    <Button color="primary" id="button1">Take Screenshot</Button>

    <ProgressTracker/>
    <ProgressTracker/>
    <ProgressTracker/>
    <ProgressTracker/>

    </div>

    <Switch>      
         
          <Route path="./components/ProgressTracker" exact component={ProgressTracker}/>
          <Route path="./components/TeacherDashboard" exact component={TeacherDashboard}/>
          <Route path="./components/NavBar" exact component={NavBar}/>

        </Switch>
      
    
  </div>

    )
};

export default TeacherDashboard;