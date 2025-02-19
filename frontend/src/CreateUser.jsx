import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/createUser', { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container mt-5'>
      <div className='card p-4 shadow'>
        <h2 className='mb-4'>Add User</h2>
        <form onSubmit={Submit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>Age</label>
            <input type='number' className='form-control' placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} required />
          </div>
          <button type='submit' className='btn btn-success w-100'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;