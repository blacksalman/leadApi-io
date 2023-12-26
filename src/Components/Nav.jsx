import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='main-nav'>
        <div className='logo-header'>
          <h1 className='logo'>LeadApi.io</h1>
        </div>
        <div className='nav-link top-nav'>
          <Link to="/" className='home-link'>Home</Link>
          <Link to="/login" className='login-link'>Login</Link>
          <Link to="/signup" className='signup-link'>Signup</Link>
        </div>
    </div>
  )
}

export default Nav