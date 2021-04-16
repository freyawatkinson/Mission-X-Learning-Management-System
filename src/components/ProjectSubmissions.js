import React from 'react';
import { Button } from '@material-ui/core';
import {BiCheck} from 'react-icons/bi';
import {IoMdDownload} from 'react-icons/io';
import NavBar from './NavBar';
import "./ProjectSubmissions.css";

function ProjectSubmissions() {
    return (
        <div id= "dashboard">
        
        

        <div id="button-container">
        <Button color="primary" id="button3"> More Projects</Button>
        <Button color="primary" id="button2">Help Centre</Button>
        <Button color="primary" id="button1">Take Screenshot</Button>
    
        </div>
        
        <div id="dashboard-inner">
          
        <div id="header-container">
        <h1>PROJECT SUBMISSIONS</h1>
        <h2><BiCheck/>MARK AS COMPLETE PROJECT</h2>
        <h2><IoMdDownload/>DOWNLOAD FILES</h2>
        </div>

        <div className="project-div">
            <h3>Div test</h3>
        </div>     

        </div>
      </div>
    )
}

export default ProjectSubmissions;