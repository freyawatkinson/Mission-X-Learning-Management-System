import react from 'react';
import './AppFooter.css';
import ReactDOM from "react-dom";


function Footer() {
    return (
        <div className="Appfooter">
            <div className="Footer">
                {/*Column1*/}
                <div className="Unstyled-list">
                    <h4>COMPANY</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Partners</li>
                    </ul>
                </div>

                {/*Column2*/}
                <div>
                    <h4>COURSES</h4>
                    <ul className="Unstyled-list">
                        <li>Register</li>
                        <li>Login</li>
                        <li>Projects</li>
                        <li>Teachers</li>
                        <li>Parents</li>
                        <li>Resources</li>
                    </ul>
                </div>

                {/*Column3*/}

                <div>
                    <h4>SUPPORT</h4>
                    <ul className="Unstyled-list">
                        <li>FAQs</li>
                        <li>Helpdesk</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/*Column4*/}

                <div>
                    <h4>LEGAL</h4>
                    <ul className="Unstyled-list">
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/*Column5*/}
                <div>
                    <h4>LevelUp Works</h4>
                    <p className="FooterInfo">
                        LevelUp Works is an Auckland-based enterprise dedicated to developing game-based learning software to helps teachers in
                        response to the New Zealand Digital Technologies and Hangarau Matihiko.
                        alan@levelupworks.com
                        (021) 668 185
                    </p>
                </div>

            </div>

        </div>
    );
}
export default Footer;