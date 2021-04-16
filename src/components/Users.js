import React from 'react';

// Shows users logged to database as a table and updates added users

export const Users = ({users}) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return null

    const UserRow = (user, index) => {

        return(
            <tr key = {index} className={index%2 === 0?'odd':'even'}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
            </tr>
        )
    }

    const userTable = users.map((user,  index) => UserRow(user, index))

    return(
        <div className='container'>
            <h2>Users</h2>
            <table className="table-bordered">
                <thread>
                    <tr>
                        <th>User ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thread>
                <tbody>
                    {userTable}
                </tbody>
            </table>
        </div>
    )
}