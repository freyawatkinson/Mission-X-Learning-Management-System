import react from "react";
import "./StudentProjLib.css";
import TopNavBar from "./TopNavBar.js";
import ProjectSideBar from "./SideBar.js";
import Footer from "./AppFooter.js";
import SPmaincontent from "./Main.ContentSP.js";

//import Footer from '.AppFooter.cs';

function Projectlib() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavBar />
      </header>
      <div />

      <body>
        <ProjectSideBar />
        <SPmaincontent />
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Projectlib;
