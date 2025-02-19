import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()

  const Update = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3001/updateUser/" + id, { name, email, age })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(result => {
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4 w-50 shadow'>
        <h2 className='text-center mb-4'>Update User</h2>
        <form onSubmit={Update}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' className='form-control' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>Age</label>
            <input type='text' className='form-control' placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <button className='btn btn-success w-100'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
