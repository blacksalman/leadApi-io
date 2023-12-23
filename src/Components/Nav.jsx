import React from 'react';
import './Nav.css';

function Nav() {
  const pathName = window.location.href
  return (
    <div className='main-nav'>
        <div className='logo-header'>
          <h1 className='logo'>LeadApi.io</h1>
        </div>
        <div className='nav-link'>
          <a href="#" className='home-link'>Home</a>
          <a href="#" className='login-link'>Login</a>
          {
            pathName.includes('home') && <a href="#" className='login-link'>Login</a>
          }
          <a href="#" className='signup-link'>Signup</a>
        </div>
    </div>
  )
}

export default Nav