import React from "react";
import "./AppFooter.css";

function Footer() {
	return (
		<div className="Appfooter">
			<div className="Footercontent">
				{/*Column1*/}
				<div className="footer-heading">
					<h4>COMPANY</h4>
					<li>About Us</li>
					<li>Careers</li>
					<li>Partners</li>
				</div>

				{/*Column2*/}
				<div className="footer-heading">
					<h4>COURSES</h4>
					<li>Register</li>
					<li>Login</li>
					<li>Projects</li>
					<li>Teachers</li>
					<li>Parents</li>
					<li>Resources</li>
				</div>

				{/*Column3*/}
				<div className="footer-heading">
					<h4>SUPPORT</h4>
					<li>FAQs</li>
					<li>Helpdesk</li>
					<li>Contact Us</li>
				</div>

				{/*Column4*/}
				<div className="footer-heading">
					<h4>LEGAL</h4>
					<li>Terms and Conditions</li>
					<li>Privacy Policy</li>
				</div>

				{/*Column5*/}
				<div className="footer-heading">
					<h4>LevelUp Works</h4>
					<p>
						LevelUp Works is an Auckland-based enterprise dedicated to
						developing game-based learning software to help teachers in response
						to the New Zealand Digital Technologies & Hangarau Matchiko.
						alan@levelupworks.com (021) 668 185
					</p>
				</div>
			</div>
		</div>
	);
}
export default Footer;
