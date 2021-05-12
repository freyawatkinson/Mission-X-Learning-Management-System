import React from "react";
import "./dashnavbar.css";
import avatar from "./Ellipse 38.png";

const Dashnavbar = ({ sidebarOpen, openSidebar }) => {
	return (
		<nav className="navbar">
			<div className="nav_icon" onClick={() => openSidebar()}>
				<i className="fa fa-bars"></i>
			</div>
			<div className="navbar_left">
				<a href="#">Link 1</a>
				<a href="#">Link 2</a>
				<a className="active_link" href="#">
					Admin active
				</a>
			</div>
			<div className="navbar_right">
				<a href="#">
					<i className="fa fa-search"></i>
				</a>
				<a href="#">
					<i className="fa fa-clock-o"></i>
				</a>
				<img width="30" src={avatar} alt="avatar" />
			</div>
		</nav>
	);
};

export default Dashnavbar;
