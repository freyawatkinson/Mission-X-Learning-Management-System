import {useState} from 'react';

// Import the CSS files
import './App.css';

// Import the components of the app

import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';

import Login from './components/Login';
import ProfileViewer from './components/ProfileViewer';
import ProgressTracker from './components/ProgressTracker';
import ProjectSubmissions from './components/ProjectSubmissions';
import StudentProfiles from './components/StudentProfiles';
import StudentProjectBuilder from './components/StudentProjectBuilder';
import StudentProjectLibrary from './components/StudentProjectLibrary';
import TeacherProjectBuilder from './components/TeacherProjectBuilder';
import TeacherProjectLibrary from './components/TeacherProjectLibrary';
import HelpRequests from './components/HelpRequests';
import TeacherDashboard from './components/TeacherDashboard';
import NavBar from './components/NavBar';


// Dashboard test
import Dashnavbar from './components/NNavbar/Dashnavbar';

// User testing modules

import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './components/UserService'

// Import React-router-dom for app routing

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// Testing nav and sidebar with states
import dashnavbar from './components/NNavbar/Dashnavbar';
import Sidebar from './components/sidebar/Sidebar';
import Stepper from './components/Stepper';


// App function

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <Router>
    <div className="container">
      <Dashnavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      
        <h1>React Dashboard</h1>
        {/* <Sidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}
        <NavBar/>
        <ProgressTracker/>
        {/* Switch statement loads/Routes to specified path and populates from specific function */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tweet" exact component={Tweet} />
          <Route path="'./components/Login'" exact component={Login}/>
          <Route path="'./components/ProfileViewer'" exact component={ProfileViewer}/>
          <Route path="./components/ProgressTracker" exact component={ProgressTracker}/>
          <Route path="'./components/ProjectSubmissions'" exact component={ProjectSubmissions}/>
          <Route path="./components/StudentProfiles" exact component={StudentProfiles}/>
          <Route path="./components/StudentProjectBuilder" exact component={StudentProjectBuilder}/>
          <Route path="./components/StudentProjectLibrary" exact component={StudentProjectLibrary}/>
          <Route path="./components/TeacherProjectBuilder" exact component={TeacherProjectBuilder}/>
          <Route path="./components/TeacherProjectLibrary" exact component={TeacherProjectLibrary}/>
          <Route path="./components/HelpRequests" exact component={HelpRequests}/>
          <Route path="./components/TeacherDashboard" exact component={TeacherDashboard}/>
          <Route path="./components/NavBar" exact component={NavBar}/>

        </Switch>
      <dashnavbar/>
   
    </div>
    </Router>
  );
}

export default App;
