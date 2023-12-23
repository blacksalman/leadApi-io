import React from 'react';
import './Nav.css';


function Nav() {
  return (
    <div className='main-nav' style={{padding: "42px"}}>
        <div className='logo-header'>
            <h1 className='logo'>LeadApi.io</h1>
        </div>
        <div className='nav-link'>
          <a href="/" className='home-link'>Home</a>
          <a href='/login' className='login-link'>Login</a>
          <a href='/api' className='home-link'>Api</a>
          <a href="/resetpassword" className='signup-link'>Signup</a>
        </div>
    </div>
  )
}

export default Nav