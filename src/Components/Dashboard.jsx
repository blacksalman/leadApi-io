import React from 'react';
import './Dashboard.css'
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const naviage = useNavigate()
  function handleClick(){
    naviage('/')
  }
  return (
    <div className='dashboard-container'>
        <div className='left-col'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <h1 style={{color: 'white'}} className='dashboard-logo'>LeadAPI.io</h1>
            </div>
            <div className='heading-names'>
                <h1 className='heading' style={{color: '#599CFF'}} onClick={handleClick}>Dashboard</h1>
                <h1 className='heading'>Domain to Email API</h1>
                <h1 className='heading'>Find Email API</h1>
                <h1 className='heading'>Verify Email API</h1>
            </div>
            <div className='footer-heading'>
              <h1 className='heading'>Settings</h1>
              <h1 className='heading'>Logout</h1>
            </div>
        </div>
        <div className='right-col'>
            <div>
              <p className='main-section'><p className='inner-para'>API Key</p>
                <input type='text' placeholder='asjcy812p03chasoi42asxcjasioudf9128134' className='input-section'/>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path d="M12.8571 17.5V19.0625C12.8571 19.5803 12.4254 20 11.8929 20H0.964286C0.431719 20 0 19.5803 0 19.0625V4.6875C0 4.16973 0.431719 3.75 0.964286 3.75H3.85714V15.3125C3.85714 16.5187 4.86647 17.5 6.10714 17.5H12.8571ZM12.8571 4.0625V0H6.10714C5.57458 0 5.14286 0.419727 5.14286 0.9375V15.3125C5.14286 15.8303 5.57458 16.25 6.10714 16.25H17.0357C17.5683 16.25 18 15.8303 18 15.3125V5H13.8214C13.2911 5 12.8571 4.57812 12.8571 4.0625ZM17.7176 2.85043L15.0681 0.27457C14.8873 0.0987666 14.642 1.29998e-06 14.3863 0L14.1429 0V3.75H18V3.51332C18 3.26469 17.8984 3.02624 17.7176 2.85043Z" fill="white"/>
                </svg>
                <p style={{color: '#FFF',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'normal'}}>copy
                </p>
              </p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard