import React from 'react';
import "./Sidebar.css";
import avatar from './Ellipse 38.png';


const Sidebar = ( {sidebarOpen , closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id='sidebar'>
            <div className="sidebar_title">
                <div className="sidebar_image">
                    <img src={avatar} alt="avatar"/>
                    <h1>Sidebar test</h1>
                </div>
                <i className="fa fa-times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div>

            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href='#'>DASHBOARD</a>
                </div>
                
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href='#'>PROGRESS TRACKER</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href='#'>STUDENT PROFILES</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href='#'>HELP REQUESTS</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href='#'>PROJECT SUBMISSIONS</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href='#'>PROJECT LIBRARY</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href='#'>PROFILE</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href='#'>SETIINGS</a>
                </div>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret"></i>
                    <a href='#'>LOGOUT</a>
                </div>
            </div>

        </div>
    )

}

export default Sidebar;