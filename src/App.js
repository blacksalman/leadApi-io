import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Dashboard from './Components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Data/HomePage'
import SignUp from './Components/Singup'
import Login from './Components/Login'
import ResetPassword from './Components/ResetPassword'
import Error from './Components/Error'
import { useLocation } from 'react-router-dom'
function App() {
  const location = useLocation();
  const hostPathName = window.location.pathname;
  const [hostUrl, setHostUrl] = useState(hostPathName)
  const urlLocation = ['login', 'signup', 'reset-password', 'dashboard', 'home'];

  useEffect(()=>{
    const url = urlLocation.some(urlData => (location.pathname.includes(urlData) || location.pathname === '/'))
    setHostUrl(url)
  }, [location])

  return (
    <>
      {
        !hostUrl && <Error/>
      }
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reset-password" element={<ResetPassword />} /> 
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>

    </>

  )
}
export default App