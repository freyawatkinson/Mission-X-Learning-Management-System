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

render() {
    return (
      <div>
        {this.state.progressHistory.map((user) => {
          return (
            <StudentProgress
              name={`${user.name.first} ${user.name.last}`}
              submission={user.submission}
              email={user.email}
              key={user.id.value}
            />
          );
        })}
      </div>
    );
      }