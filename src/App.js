import React from 'react';
import './App.css';
import NavBar1 from './Shared/NavBar/NavBar1';
/*
import {Route, Link} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/LoginSignup';
import ProfileViewer from './Components/ProfileViewer';
import ProgressTracker from './Components/ProgressTracker';
import ProjectSubmissions from './Components/ProjectSubmissions';
import StudentProfiles from './Components/StudentProfiles';
import StudentProjectBuilder from './Components/StudentProjectBuilder';
import StudentProjectLibrary from './Components/StudentProjectLibrary';
import TeacherProjectBuilder from './Components/TeacherProjectBuilder';
import TeacherProjectLibrary from './Components/TeacherProjectLibrary';
import HelpRequests from './Components/HelpRequests';
import TeacherDashboard from './Components/TeacherDashboard';*/


function App() {
  return (
    <div className="App">

      <NavBar1/>
    {/*
     <TeacherDashboard/>
      <Route exact path="/" component={Home} />
      <Route exact path="../Pages/LoginSignup" component={Login} />
      <Route exact path="/StudentProjectLibrary" component={StudentProjectLibrary} />
      <Route exact path="/StudentProjectBuilder" component={StudentProjectBuilder} />
      <Route exact path="/ProfileViewer" component={ProfileViewer} />
      <Route exact path="/TeacherDashboard" component={TeacherDashboard} />
      <Route exact path="/ProgressTracker" component={ProgressTracker} />
      <Route exact path="/StudentProfiles" component={StudentProfiles} />
      <Route exact path="/HelpRequests" component={HelpRequests} />
      <Route exact path="/ProjectSubmissions" component={ProjectSubmissions} />
      <Route exact path="/TeacherProjectLibrary" component={TeacherProjectLibrary} />
    <Route exact path="/TeacherProjectBuilder" component={TeacherProjectBuilder} />*/}
    </div>
  );
}

export default App;

