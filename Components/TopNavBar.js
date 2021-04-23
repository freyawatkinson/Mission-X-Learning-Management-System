import React from "react";
import { Link } from "react-router-dom";
import './TopNavBar.css';
import TopNavLogo from '../Images/TopNavLogo.png';

function NavBar() {
  return (
    <div className="topNav"> {/* This is the container*/}
      <div className="topMenu">
        <img src={TopNavLogo} alt="Nav Bar Logo"/>
      </div>

      <div className="topNavLinks">
        <ul>
          <li><a className="item">HOME</a></li>
          <li><a className="item">PROJECTS</a></li>
          <li><a className="item">TEACHERS</a></li>
        </ul>
      </div>

      <div>
        <ul>
          <li><a className="language">LANG</a></li>
          <li><a className="languageImages">Import Language Images</a></li>
          <li><a className="profile">Import Profile image</a></li>
          <li><a className="profileName">RAWIRI FLETCHER</a></li>
        </ul>
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
      </div >
    );
}

export default NavBar;