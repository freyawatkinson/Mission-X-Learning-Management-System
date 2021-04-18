import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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

    <Switch>      
         
          <Route path="./components/ProgressTracker" exact component={ProgressTracker}/>
          <Route path="'./components/ProjectSubmissions'" exact component={ProjectSubmissions}/>
          <Route path="./components/TeacherProjectBuilder" exact component={TeacherProjectBuilder}/>
          <Route path="./components/TeacherProjectLibrary" exact component={TeacherProjectLibrary}/>
          <Route path="./components/HelpRequests" exact component={HelpRequests}/>
          <Route path="./components/TeacherDashboard" exact component={TeacherDashboard}/>
          <Route path="./components/NavBar" exact component={NavBar}/>

        </Switch>
      
    <h1>Teacher Dashboard</h1>
    </div>
  </div>

    )
};

export default TeacherDashboard;