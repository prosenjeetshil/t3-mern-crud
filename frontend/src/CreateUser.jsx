import React, { useState } from 'react'
import axios from "axios"

function CreateUser() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email,age})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }

  return (
    <div className=''>
        <div className=''>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input type='text' placeholder='Enter Name' className='' onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' placeholder='Enter Email' className='' onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor='age'>Age</label>
                  <input type='text' placeholder='Enter Age' className='' onChange={(e)=> setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateUser