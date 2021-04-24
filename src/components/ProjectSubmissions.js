import React from 'react';
import { Button } from '@material-ui/core';
import {BiCheck} from 'react-icons/bi';
import {IoMdDownload} from 'react-icons/io';
import NavBar from './NavBar';
import "./ProjectSubmissions.css";
import SubmittedProject from './SubmittedProject';
// Import project component here


class ProjectSubmissions extends React.Component {
    constructor(props) {
        super(props);
        this.state={ user: [] };
    }

    // Fetching data from the database using API
    async getUser() {
    const baseURL = `http://localhost:4000`;
    const endpoint = `api/project`;
    const projectID = `3`;

    const apiURL = `${baseURL}/${endpoint}/${projectID}`; // http://localhost:4000/api/project/3
    const res = await fetch(apiURL);
    const data = await res.json();

    console.log(data);
    return data;
}
async componentDidMount() {
    const user = await this.getUser();
    this.setState({user});
}

    render () {
        return(
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
        <SubmittedProject/>
        </div>     

        </div>
      </div>

        )}
}

export default ProjectSubmissions;