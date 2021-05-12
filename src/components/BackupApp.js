import { useState } from "react";

// Import the CSS files
import "./App.css";

import ProgressTracker from "./components/ProgressTracker";
import NavBar from "./components/NavBar";
import TeacherDashboard from "./components/TeacherDashboard";

// Dashboard test
import Dashnavbar from "./components/NNavbar/Dashnavbar";

// Import React-router-dom for app routing

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ProjectProgress from "./components/ProgressTracker";
import Sidebar from "./components/sidebar/Sidebar";
import ProjectSubmissions from "./components/ProjectSubmissions";

// App function

const backupApp = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const openSidebar = () => {
		setSidebarOpen(true);
	};

	const closeSidebar = () => {
		setSidebarOpen(false);
	};

	return (
		<Router>
			<div className="app">
				<Dashnavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />

				{/* <Sidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />  */}
				{/* <Sidebar/> */}

				{/* <NavBar/> */}

				<ProjectSubmissions />
				{/* <ProjectProgress/> */}

				{/* Switch statement loads/Routes to specified path and populates from specific function */}
				<Switch>
					<Route
						path="./components/ProgressTracker"
						exact
						component={ProgressTracker}
					/>
					{/* <Route path="./components/TeacherDashboard" exact component={TeacherDashboard}/> */}
					<Route path="./components/NavBar" exact component={NavBar} />
				</Switch>
				<dashnavbar />
			</div>
		</Router>
	);
};

export default backupApp;

//Kerris App.js

{
	/*import react from "react";
import logo from "./logo.svg";
import "./App.css";
import PropTypes from "prop-types";

import HomePage from "./Components/HomePage/HomePage.js";
import Projectlib from "./Components/StudentProjectLibrary/StudProjLib.js";
// import Studprofile from "./Components/TDStudProfile.js";

import TopNavBar from "./Components/TopNavBar.js";
import ProjectSideBar from "./Components/SideBar.js";
import Footer from "./Components/AppFooter.js";
import SPmaincontent from "./Components/StudentProjectLibrary/Main.ContentSP.js";

//import { Route } from "react-router-dom";
//import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      {/*Router*/
}
{
	/*
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Projectlib" component={Projectlib} />
        {/* <Route exact path="/StudentProfile" component={StudentProfile} /> */
}
{
	/*
      </div>
      <body>
        <script></script>
      </body>
    </div>
  );
}

export default App;*/
}
