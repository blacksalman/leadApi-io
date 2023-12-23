import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Dashboard from './Components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Data/HomePage'
import SignUp from './Components/Singup'
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'
import Nav from './Components/Nav'
function App() {
  const pathName = window.location.href
  const pathLocationName = ['home', 'login', 'signup', 'reset-password']
  const hostName = pathLocationName.some(urlData => pathName.includes(urlData))
  console.log('hostname', hostName);
  return (
    <>
      {
        !(pathName.includes('dashboard') || pathName.includes('home')) &&
          <div className="App">
            <Nav/>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route exact path="/" element={<SignUp />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/reset-password" element={<ResetPassword />} />
                </Routes>
              </div>
            </div>
          </div>
      }

      <Routes>

        <Route exact path="/dashboard" element={<Dashboard />} />
        
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </>

  )
}
export default App