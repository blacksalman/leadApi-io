import React from 'react';
import Nav from './Nav';
import './Error.css';

function Error() {
  return (
    <div>
        <div className="auth-wrapper error-page">
            <Nav/>
            <div className="auth-inner">
                <h1 style={{textAlign: 'center'}}>404 Error</h1>
                <h1 style={{textAlign: 'center'}}>Page Not Found</h1>
            </div>
        </div>
    </div>
  )
}

export default Error