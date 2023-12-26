import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Dashboard from './Components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Data/HomePage'
import SignUp from './Components/Singup'
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'
import Error from './Components/Error'
function App() {
  const pathName = window.location.href
  const location = ['login', 'signup', 'reset-password', 'dashboard'];
  const url = location.some(urlData => pathName.includes(urlData))
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reset-password" element={<ResetPassword />} /> 
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>

      {
        !url && <Error/>
      }

    </>

  )
}
export default App