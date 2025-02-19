import React from 'react'

function UpdateUser() {
  return (
    <div className=''>
        <div className=''>
            <form>
                <h2>Update User</h2>
                <div>
                  <label htmlFor='name'>Name</label>
                  <input type='text' placeholder='Enter Name' className=''/>
                </div>
                <div>
                  <label htmlFor='email'>Email</label>
                  <input type='email' placeholder='Enter Email' className=''/>
                </div>
                <div>
                  <label htmlFor='age'>Age</label>
                  <input type='text' placeholder='Enter Age' className=''/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser