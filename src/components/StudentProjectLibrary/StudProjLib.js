import React from "react";
import "./StudentProjLib.css";
import TopNavBar from "../TopNavBar/TopNavBar";
import ProjectSideBar from "./SideBar.js";
import Footer from "../AppFooter/AppFooter";
import SPmaincontent from "./Main.ContentSP.js";

function Projectlib() {
  return (
    <div>
      <TopNavBar />

      <div className="mainProjectContainer">
        <div className="projectSideBar">
          <ProjectSideBar />
        </div>
        <div className="projectContent">
          <h1>Projects</h1>
          <h4>
            Welcome to the project library. You can use the filters on the right
            to help you search for specific projects.
          </h4>
          <SPmaincontent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projectlib;
