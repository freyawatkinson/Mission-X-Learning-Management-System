import react from 'react';
import './AppFooter.css';
import ReactDOM from "react-dom";


function Footer() {
    return (
        <div className="Appfooter">
            <div className="Footer">
                <div className="Footercontent">
                    {/*Column1*/}
                    <div className="footer-heading-1">
                    <ul className="Unstyled-list">
                        <h4>COMPANY</h4>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Partners</li>
                        </ul>
                    </div>


                    {/*Column2*/}
                    <div className="footer-heading-2">
                        <ul className="Unstyled-list">
                        <h4>COURSES</h4>
                            <li>Register</li>
                            <li>Login</li>
                            <li>Projects</li>
                            <li>Teachers</li>
                            <li>Parents</li>
                            <li>Resources</li>
                        </ul>
                    </div>

                     {/*Column3*/}
                    <div className="footer-heading-3">

                        <ul className="Unstyled-list">
                        <h4>SUPPORT</h4>
                            <li>FAQs</li>
                            <li>Helpdesk</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/*Column4*/}
                    <div className="footer-heading-4">

                        <ul className="Unstyled-List">
                        <h4>LEGAL</h4>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/*Column5*/}
                    <div className="footer-heading-5">
                    <ul className="Unstyled-List">
                     <h4>LevelUp Works</h4>
                        <li>
                            LevelUp Works is an Auckland-based enterprise dedicated to developing game-based learning software to helps teachers in
                            response to the New Zealand Digital Technologies and Hangarau Matihiko.
                         </li>
                         <li>
                         alan@levelupworks.com
                         </li>
                         <li>
                         (021) 668 185
                         </li>
                         </ul>
                    </div>

                </div>
            </div >
        </div>
    );
}
export default Footer;