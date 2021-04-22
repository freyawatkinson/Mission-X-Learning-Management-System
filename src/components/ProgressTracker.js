import React from 'react';
import StudentProgress from './StudentProgress';
import './ProgressTracker.css';

class ProgressTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {user:  [
      
       
    ]};

    this.user = this.user.bind(this);

  };

// Fetching data from the database using API
  async getUser() {
      const res = await fetch('https://localhost:4000');
      const data = await res.json();
      return data.results;
  }

  async componentDidMount() {
      const user = await this.getUser();
      this.setState({user});
  }

render() {
    return (
      <div>
        {this.state.user.map((user) => {
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
};




export default ProgressTracker;