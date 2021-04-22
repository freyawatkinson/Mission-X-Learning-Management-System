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
      // const res = await fetch('https://localhost:4000');
      // const data = await res.json();
      // return data.results;
      return [
        {
        name: {
          first : 'Sebin',
          last: 'Benjamin'
        },
        completionStatus : 9,
        
      },

      {
        name: {
          first : 'Sebin',
          last: 'Benjamin'
        },
        completionStatus : 9,
        
      },

      {
        name: {
          first : 'Sebin',
          last: 'Benjamin'
        },
        completionStatus : 9,
        
      },

      {
        name: {
          first : 'Sebin',
          last: 'Benjamin'
        },
        completionStatus : 9,
        
      },

     
      
    
    
    ];
  }
  async componentDidMount() {
      const user = await this.getUser();
      this.setState({user});
  }
render() {
    return (
      <div className='progress-container'>
        
        {this.state.user.map((user) => {
          return (
            <StudentProgress
            
              name={`${user.name.first} ${user.name.last}`}
              completionStatus={user.completionStatus}
              
            />
          );
        })}
      </div>
    );
  }
};
export default ProgressTracker;