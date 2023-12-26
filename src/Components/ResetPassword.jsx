import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function ResetPassword() {
  return (
    <>
      <Nav/>
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h3>Reset your password</h3>
                    <p className='logo-para' style={{color: "silver",display: 'flex', justifyContent: 'center'}}>Do you remember your password again? <span><Link to='/login' style={{textDecoration: "none",color: "lightskyblue"}}>Login</Link></span></p>
                    
                    <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        // className="form-control"
                        // placeholder="Enter email"
                        style={{width: '97%',background: 'transparent',border: '1px solid gray',height: '38px',borderRadius: '5px'}}
                    />
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="creat-account-btn">
                        Reset Password
                    </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}