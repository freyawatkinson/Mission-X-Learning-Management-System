import React from 'react';
import StudentProgress from './StudentProgress.js';
import Student from './student.js';

class StudentProfiles extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        users: [],
      };

      this.getUsers = this.getUsers.bind(this); // ...
    }

   async getUsers() {
       const res = await fetch ('https://localhost:4000');
       const data = await res.json();
       return data.results;
   }

   async componentDidMount() {
       const users = await this.getUsers();
       this.setState({users});
   }
  
    // ...
  
    render() {
      return (
        <div>
          {this.state.users.map((user) => (
            <Student
              name={`${user.name.first} ${user.name.last}`}
              avatar={user.picture.thumbnail}
              email={user.email}
              key={user.id.value}
            />
          ))}
        </div>
      );
    }
  }

export default StudentProfiles;