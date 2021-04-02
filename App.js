import './App.css';
import {Route, Link} from 'react-router-dom';

import Home from './Components/Home';
import Login from './Components/Login';
import ProfileViewer from './Components/ProfileViewer';
import ProgressTracker from './Components/ProgressTracker';
import ProjectSubmissions from './Components/ProjectSubmissions';
import StudentProfiles from './Components/StudentProfiles';
import StudentProjectBuilder from './Components/StudentProjectBuilder';
import StudentProjectLibrary from './Components/StudentProjectLibrary';
import TeacherProjectBuilder from './Components/TeacherProjectBuilder';
import TeacherProjectLibrary from './Components/TeacherProjectLibrary';
import HelpRequests from './Components/HelpRequests';
import TeacherDashboard from './Components/TeacherDashboard';

import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">

      <NavBar />
      <TeacherDashboard/>
      
      

      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/StudentProjectLibrary" component={StudentProjectLibrary} />
      <Route exact path="/StudentProjectBuilder" component={StudentProjectBuilder} />
      <Route exact path="/ProfileViewer" component={ProfileViewer} />
      <Route exact path="/TeacherDashboard" component={TeacherDashboard} />
      <Route exact path="/ProgressTracker" component={ProgressTracker} />
      <Route exact path="/StudentProfiles" component={StudentProfiles} />
      <Route exact path="/HelpRequests" component={HelpRequests} />
      <Route exact path="/ProjectSubmissions" component={ProjectSubmissions} />
      <Route exact path="/TeacherProjectLibrary" component={TeacherProjectLibrary} />
      <Route exact path="/TeacherProjectBuilder" component={TeacherProjectBuilder} />

    </div>
  );
}

export default App;
