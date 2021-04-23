import react from "react";
import './SideBar.css';

function Sidebar() {
    return (
        <div className="SideBar">
            <div className="SBContent">
            <div>
                <h3>SUBSCRIPTION</h3>
                <label><input type="checkbox"/>Free</label>
                <br/>
                <label><input type="checkbox"/>Premium</label><br/>
            </div>
            <div>
                <h3>ACTIVITY TYPE</h3>
                <label><input type="checkbox"/>Animation</label><br/>
                <label><input type="checkbox"/>Game</label><br/>
                <label><input type="checkbox"/>Chatbot</label><br/>
                <label><input type="checkbox"/>Augmented Reality</label><br/>
            </div>
            <div>
                <h3>YEAR LEVEL</h3>
                <label><input type="checkbox"/>1 - 4</label><br/>
                <label><input type="checkbox"/>5 - 6</label><br/>
                <label><input type="checkbox"/>7 - 8</label><br/>
                <label><input type="checkbox"/>9 - 13</label><br/>
            </div>
            <div>
                <h3>SUBJECT MATTER</h3>
                <label><input type="checkbox"/>Computer Science</label><br/>
                <label><input type="checkbox"/>Maths</label><br/>
                <label><input type="checkbox"/>Science</label><br/>
                <label><input type="checkbox"/>Language</label><br/>
                <label><input type="checkbox"/>Art</label><br/>
                <label><input type="checkbox"/>Music</label><br/>
            </div>
            </div>
        </div>
    )
}

export default Sidebar;