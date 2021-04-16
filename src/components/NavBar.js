// import useState hook to create menu collapse state
import React, { useState } from "react";
// Using the react router dom to add links to sidebar
import { Link } from 'react-router-dom';

//import react pro sidebar components - This is a package from npm.
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons 
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import {IoMdArrowDropleft} from "react-icons/io";
import {IoMdArrowDropright} from "react-icons/io";

// Import images

import ProfilePic from "./Ellipse 38.png";


//import sidebar css from npm react-pro-sidebar and css file
import "react-pro-sidebar/dist/css/styles.css";
import "./NavBar.css";

// Navbar component using ProNavBar with Statechange on collapse


const NavBar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="profilepic">
          
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <img src={ProfilePic} className="Profile-Pic-Collapsed" alt="profilepic" size={10}/> : <img src={ProfilePic} className="Profile-Pic" alt="profilepic"/>}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <IoMdArrowDropright size={70}/>
              ) : (
                <IoMdArrowDropleft size={70}/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            
            <Menu iconShape="square">

              <MenuItem active={true} icon={<FiHome />}><Link to="/ProgressTracker">
                PROGRESS TRACKER</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}><Link to="./StudentProfiles" >STUDENT PROFILES</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />}><Link to="./HelpRequests">HELP REQUESTS</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to="/ProjectSubmissions">PROJECT SUBMISSIONS</Link></MenuItem>
              <MenuItem icon={<BiCog />}><Link to="./ProjectLibrary">PROJECT LIBRARY</Link></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className="sidebar-footer">
            <Menu className="flex-container" iconShape="square">
              <MenuItem className="flex-item" icon={<FiLogOut />}>Profile</MenuItem>
              <MenuItem className="flex-item" icon={<FiLogOut />}>Settings</MenuItem>
              <MenuItem className="flex-item" icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
  );
};

export default NavBar;