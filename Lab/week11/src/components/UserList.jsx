import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserList() {
    const [users, setUsers] = useState([])
    const fetchUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            setUsers(response.data)
        })
        .catch(error => {
            console.error('There was an error fetching the users!', error);
        });
    }
    useEffect(fetchUsers, [])

  return (
    <div>
        <h3>User List</h3>
        <table border="1" cellPadding="5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
