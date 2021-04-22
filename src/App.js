import {useState} from 'react';

// Import the CSS files
import './App.css';


import ProgressTracker from './components/ProgressTracker';
import NavBar from './components/NavBar';


// Dashboard test
import Dashnavbar from './components/NNavbar/Dashnavbar';

// Import React-router-dom for app routing

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import ProjectProgress from './components/ProgressTracker';


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
      {/* <Dashnavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> */}
      
        
        {/* <Sidebar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}
        {/* <NavBar/> */}
        {/* <TeacherDashboard/> */}
        <ProjectProgress/>
        
        {/* Switch statement loads/Routes to specified path and populates from specific function */}
        <Switch>
         
          
          <Route path="./components/ProgressTracker" exact component={ProgressTracker}/>
          {/* <Route path="./components/TeacherDashboard" exact component={TeacherDashboard}/> */}
          <Route path="./components/NavBar" exact component={NavBar}/>

        </Switch>
      <dashnavbar/>
   
    </div>
    </Router>
  );
}

export default App;
