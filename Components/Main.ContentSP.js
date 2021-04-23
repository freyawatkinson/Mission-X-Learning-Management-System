import { render } from '@testing-library/react';
import react from 'react'
import './Main.ContentSP.css'
import './Main.Content.Projects.js'

import PropTypes from 'prop-types';
import Tabs from './Tabs.js';

function SPmaincontent() {
    return (
        <div className="contentContainer">
            <div className="contentHeader">
                <h1>PROJECTS</h1>
                <p>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</p>
            </div>
            <div className="contentTabs">
                <div className="projectLevel">
                   <Tabs/> {/*Insert tabs with hovers and onclick functions*/}
                </div>
                <div className="displayTab">
                    {/*Insert 25, 50, 100 with title SHOW, hovers and onclick functions*/}
                </div>
            </div>
            <div className="studentActivities">

            </div>
            <div className="backToTopbutton">
                <input type="button">BACK TO TOP</input>
            </div>
        </div>
    )
}

export default SPmaincontent;