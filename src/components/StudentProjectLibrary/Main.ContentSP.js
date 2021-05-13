import React, { useEffect, useState } from "react";
import "./ProjectCard/Main.Content.Projects.js";
import "./StudentProjLib.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import StudentProjectCard from "./ProjectCard/Main.Content.Projects";
import { Link } from "react-router-dom";

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

function SPmaincontent(props) {
  const [projectData, setProjectData] = useState([]);

  const callAPI = () => {
    const requestURL1 = "http://localhost:4000/api/project/getProjects";

    fetch(requestURL1)
      .then((response) => response.json())
      .then((data) => {
        setProjectData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    callAPI();
  }, []);

  const classes = buttonStyles();

  return (
    <div className="contentContainer">
      <div className="contentHeader"></div>

      <div className="contentTabs">
        <div className="projectLevel">
          <ButtonGroup
            size="small"
            variant="text"
            className={buttonStyles.tabs1}
          >
            <Button>BEGINNER</Button>
            <Button>INTERMEDIATE</Button>
            <Button>ADVANCED</Button>
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
        </div>
      </div>

      <div className="studentActivities">
        {projectData.map((project) => {
          return (
            <Link className={classes.textDecoration} to={props.path}>
              <StudentProjectCard
                Image={project.IMGURL}
                Title={project.Course}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SPmaincontent;
