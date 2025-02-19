import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-between mb-3'>
                <h2>User List</h2>
                <Link to="/create" className='btn btn-success'>Add User +</Link>
            </div>
            <table className='table table-striped table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={`/update/${user._id}`} className='btn btn-warning me-2'>Update</Link>
                                <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;