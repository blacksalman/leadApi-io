import React, { Component } from 'react'
import Dashboard from './Dashboard'
export default function SignUp(){

    return (
      <form>
        <h3>Create an account</h3>
        <p>Create a free account, no credit-card needed.</p>
        <div className='mb-3' style={{display: 'flex'}}>

          <div className="mb-3" >
            <label>First</label>
            <input
              type="text"
              // className="form-control"
              placeholder="First name"
              style={{width: '97%',background: 'transparent',border: '1px solid gray',height: '38px',borderRadius: '5px'}}
            />
          </div>
          <div className="mb-3">
            <label style={{visibility: 'hidden'}}>Last</label>
            <input type="text" 
            // className="form-control" 
            placeholder="Last name" 
            style={{width: '97%',background: 'transparent',border: '1px solid gray',height: '38px',borderRadius: '5px'}}
          />
          </div>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            // className="form-control"
            // placeholder="Enter email"
            style={{width: '97%',background: 'transparent',border: '1px solid gray',height: '38px',borderRadius: '5px'}}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            // className="form-control"
            // placeholder="Enter password"
            style={{width: '97%',background: 'transparent',border: '1px solid gray',height: '38px',borderRadius: '5px'}}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="creat-account-btn">
            Sign Up
          </button>
        </div>
        <p className='py-10' style={{display: 'flex', justifyContent: 'center'}}>Already have an account? <span><a href='/' style={{textDecoration: "none",color: "lightskyblue"}}>Log in</a></span> </p>
      </form>
    )
  // }
}