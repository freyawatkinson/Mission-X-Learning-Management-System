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
