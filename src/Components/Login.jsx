import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function Login(){
    return (
        <>
           <Nav/>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div>
                        <h3>Login into your account</h3>
                        <p className='logo-para' style={{color: "silver",display: 'flex', justifyContent: 'center'}}>Don't have an account? <span><Link to='/signup' style={{textDecoration: "none",color: "lightskyblue"}}>Sign up</Link></span></p>
                    </div>
                    <form>
                        
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
                        
                        <div className='d-flex justify-content-between checkboxes'>
                            <span><input type='checkbox' value="Remember me"/><label>Remember me</label></span>
                            <p><Link to='/reset-password' style={{textDecoration: "none",color: "lightskyblue"}}>Forgot password?</Link></p>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="creat-account-btn">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

