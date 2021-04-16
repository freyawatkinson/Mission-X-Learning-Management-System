import React, {Component} from 'react';
import './ProgressTracker.css';
import StudentProgress from './StudentProgress';



class ProgressTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userProgress:  [],
    };

    this.getUserProgress = this.getUserProgress.bind(this);
    
  };
// Fetching data from the database using API
  async getUserProgress() {
      const res = await fetch('https://localhost:4000');
      const data = await res.json();
      return data.results;
  }

  async componentDidMount() {
      const userProgress = await this.getUserProgress();
      this.setState({userProgress});
  }
// Example function from Sebin:

//   function ProjectProgress() {
//     const studentsProjectData = [{}];
//     return (
//       <div>
//         {studentsProjectData.map((student) => (
//           <>
//             <StudentProgress
//               name={`${student.name.first} ${student.name.last}`}
//               completionStatus={student.projectsCompleted}
//               key={student.id.value}
//             />
//           </>
//         ))}
//       </div>
//     );
//   }

// Mapping through the array of data
  render() {
      var users =[];
      if (this.state.userProgress) {
          user = this.state.userProgress.map(user => {   
             
    return (
        
      <div>  

        {this.state.progressHistory.map((user) => {
          <StudentProgress
            name={`${user.name.first} ${user.name.last}`}
            submission={user.submission}
            email={user.email}
            key={user.id.value}
          />}
    

        </div>

        )
      }}}};
      {/* Some random syntax error with the brackets here that needs to be fixed */}

export default ProgressTracker;