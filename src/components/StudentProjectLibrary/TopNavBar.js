import React from "react";
import { Link } from "react-router-dom";
import "./TopNavBar.css";
import TopNavLogo from "./Images/TopNavLogo.png";
import MaoriFlag from "./Images/Maoriflag.png";
import NZFlag from "./Images/NZFlag.png";
import Icon1 from "./Images/IconTopNav.png";

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
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <a className="item">FEATURES</a>
              {/*Change to Projects for personal use with an on-click*/}
            </li>
            <li>
              <a className="item">TEACHERS</a>
            </li>
          </ul>
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
      </div>
    </div>
  );
}

export default TopNavBar;
