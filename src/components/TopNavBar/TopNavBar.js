import React from "react";
import { Link } from "react-router-dom";
import "./TopNavBar.css";
import TopNavLogo from "../HomePage/ImagesTopNav/TopNavLogo.png";
import MaoriFlag from "../HomePage/ImagesTopNav/Maoriflag.png";
import NZFlag from "../HomePage/ImagesTopNav/NZFlag.png";
import Icon1 from "../HomePage/ImagesTopNav/IconTopNav.png";

function TopNavBar() {
	return (
		<div className="TopNavMain">
			{/* This is the container*/}
			<div className="topMenulogo">
				<Link to="/">
					<img src={TopNavLogo} alt="Nav Bar Logo" />
				</Link>
			</div>

			<div className="topNavContainer">
				<div className="tNContent">
					{/* Quick link back to home page */}
					<Link to="/">HOME</Link>

					{/* Quick link back to Freya's working page Project Submissions */}
					<Link to="/ProjectSubmissions">Project Submissions</Link>
					{/*change to Projects for personal use*/}

					{/* Quick link to Keri's Student Project Library page */}
					<Link to="/Projectlib">Student Project Library</Link>
				</div>
			</div>

			<div className="topNavLogin">
				{/*Flag Containter*/}
				<div className="languageFlags">
					<h3>LANG</h3>
					<div className="fimages">
						<img src={NZFlag} alt="Nz Flag" />
						<img src={MaoriFlag} alt="Maori Flag" />
					</div>
				</div>

				<div className="loginBar">
					<img src={Icon1} alt="Profile Icon" />
					{/*Modal*/}
				</div>
				{/*<p>
          <Link to="/">Student Profile Page</Link>
          </p>
          <p>
            <Link to="/Projectlib">Student Project Library</Link>
          </p>
          <p>
            <Link to="/Progresstrack">Student Progress Tracking</Link>
          </p>*/}
			</div>
		</div>
	);
}

export default TopNavBar;
