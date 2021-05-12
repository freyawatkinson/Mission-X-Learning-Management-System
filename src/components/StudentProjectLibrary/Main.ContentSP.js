import { render } from "@testing-library/react";
import react from "react";
import "./Main.ContentSP.css";
import "./ProjectCard/Main.Content.Projects.js";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import StudentActivities from "./ProjectCard/Main.Content.Projects.js";
import {Link} from "react-router-dom";
/*import Tabs from './Tabs.js';*/

//Second section of Student Project Library Page.
//To be called to the main Student Library Page.
//Body of the Student Library.
// Content *Header, *Buttons to Call Project Level, *Buttons to filter, ProjectCard Loop Function and API to call

const buttonStyles = makeStyles((theme) => ({
  tabs1: {
    border: "1px solid grey",
    color: "white",
    height: 20,
    textDecoration: "none",
  },

  tabs2: {
    border: "1px solid grey",
    color: "white",
    height: 20,
    textDecoration: "none",
  },
}));

function BackToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function SPmaincontent() {
  return (
    <div className="contentContainer">
      <div className="contentHeader">
        <h1>PROJECTS</h1>
        <p>
          Welcome to the project library. You can use the filters on the right
          to help you search for specific projects.
        </p>
      </div>

      <div className="contentTabs">
        <div className="projectLevel">
          <ButtonGroup
            size="small"
            variant="text"
            className={buttonStyles.tabs1}
          >
            <Button onClick>BEGINNER</Button>
            <Button onClick>INTERMEDIATE</Button>
            <Button onClick>ADVANCED</Button>
            <Button onClick>ALL</Button>
          </ButtonGroup>
        </div>

        <div className="displayTab">
          <ButtonGroup
            size="small"
            variant="text"
            className={buttonStyles.tabs2}
          >
            <Button>25</Button>
            <Button>50</Button>
            <Button>100</Button>
          </ButtonGroup>
          0
        </div>
      </div>

      <div className="studentActivities">{/*<StudentActivitiesBackend/>*/}</div>
      {/* Create API to call data*/}
      {/* Create const for pulling Data for Content buttons 
          Create and Call function requesting data
          Fetch! */}
      {/* Call  */}

      <div className="backToTopbutton">
        <button
          type="button"
          onClick={BackToTop}
          variant="contained"
          size="small"
        >
          BACK TO TOP
        </button>
      </div>
    </div>
  );
}

export default SPmaincontent;
