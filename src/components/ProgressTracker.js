import React from 'react';
import StudentProgress from './StudentProgress';
import './ProgressTracker.css';
class ProgressTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: []};
  };
// Fetching data from the database using API
  async getUser() {
      const baseURL = `http://localhost:4000`;
      const endpoint = `api/project`;
      const projectID = `3`;

      const apiURL = `${baseURL}/${endpoint}/${projectID}`; // http://localhost:4000/api/project/3
      const res = await fetch(apiURL);
      const data = await res.json();

      console.log(data);
      return data;
  }
  async componentDidMount() {
      const user = await this.getUser();
      this.setState({user});
  }
//  ADD SOME KIND OF FUNCTION TO CHECK IF PROEJCT HAS BEEN COMPLETED ACCORDING TO PROJECTID
  // checkComplete() {
  //   if ({user.submitted} == true) {
  //     console.log('This project has been submitted');
  //   }
  // }


render() {
    return (
      <div className='progress-container'>
        
        {this.state.user.map((user) => {
          return (
            <StudentProgress
            
              name={user.student_name}
              completionStatus={user.userId}
            
            />
            
          );
        })}
      </div>
    );
  }
};
export default ProgressTracker;