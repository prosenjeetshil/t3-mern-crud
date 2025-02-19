import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Users() {
    const [users, setUsers] = useState([])
  return (
    <div className=''>
        <div className=''>
            <Link to="/create" className='btn btn-success'>Add +</Link>
            <table className=''>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return (
                            <tr>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td>
                                    <Link to="/update" className='btn btn-success'>Update</Link>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users