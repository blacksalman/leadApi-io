import React from 'react'
import "./HomePage.css"
import ImageOne from '../images/image-1.png'
import ImageTwo from '../images/image-2.png'
import ImageThree from '../images/image-3.png'
import DataComponents from './DataComponents'

function HomePage() {
    const pathName = window.location.href
  return (
    <div className='home-container'>

    <div className='home-nav'>
        <div className='logo-header'>
            <h1 className='logo'>LeadApi.io</h1>
        </div>
        <div className='nav-link'>
          <a href="/" className='home-link'>Home</a>
          <a href="/" className='login-link'>Login</a>
          {
            pathName.includes('home') && <a href="/" className='login-link'>Api</a>
          }
          <a href="/" className='signup-link'>Signup</a>
        </div>
    </div>
        <div>
            <div style={{paddingTop: '30px'}} className='into-section'>
                <h1 className='home-intro'>
                    Lead Generation API’s to supercharge
                </h1>
                <h1 className='home-intro'>
                   your B2B SaaS & Projects.
                </h1>
                <p style={{color: "#599CFF", display: "flex", justifyContent: 'center'}}>100% Free Access to All API’s</p>
                <div style={{ display: "flex", justifyContent: 'center'}}>
                    <button className='signup-free'>Signup for Free</button>
                </div>
            </div>
            <div className='images-section'>
                <div className='innerImage-section'>
                    <div className='img-col'>
                       <img src={ImageOne} alt='img-1'/>
                       <h4 className="img-heading">Live Email Validation <br/> & Verification</h4>
                    </div>
                    <div className='img-col'>
                       <img src={ImageTwo} alt='img-2'/>
                       <h4 className="img-heading">13,458,254+ <br/> Company  Data</h4>
                    </div>
                    <div className='img-col'>
                       <img src={ImageThree} alt='img-3'/>
                       <h4 className="img-heading">132,524,674+ <br/> Emails</h4>
                    </div>
                </div>
            </div>
            <div className='card-section' style={{marginTop: "100px"}}>
                <div className='card'>
                    <div className='inner-card-section'>
                        <h1 style={{color: '#FFF'}}>Live Email Verify API</h1>
                        <p style={{color: '#599CFF',fontFamily: 'Inter'}}>Find if email is valid, deliverable,<br/>
                        full inbox or disposable etc.</p>
                    </div>
                    <div style={{borderRadius: "20px", background: 'rgba(217, 217, 217, 0.09)', backdropFilter: 'blur(42px)', height: "259px", display:'flex' ,alignItems: "center",width: "409px",justifyContent: "center", paddingLeft: "10px"}}>
                        <div>
                            <DataComponents/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-section' style={{marginTop: "185px"}}>
                <div className='card'>
                    <div style={{borderRadius: "20px", background: 'rgba(217, 217, 217, 0.09)', backdropFilter: 'blur(42px)', height: "259px", display:'flex' ,alignItems: "center",width: "409px",justifyContent: "center",paddingLeft: "10px"}}>
                        <div>
                          <DataComponents/>
                        </div>
                    </div>
                    <div className='inner-card-section second-card-section'>
                        <h1 style={{color: '#FFF'}}>Live Email Finder API</h1>
                        <p style={{color: '#599CFF',fontFamily: 'Inter'}}>Find anyone’s professional email with from<br/>
                          their name and company domain.</p>
                    </div>
                </div>
            </div>

            <div className='card-section' style={{marginTop: "185px"}}>
                <div className='card'>
                    
                    <div className='inner-card-section'>
                        <h1 style={{color: '#FFF'}}>Website to Email API</h1>
                        <p style={{color: '#599CFF',fontFamily: 'Inter'}}>Find anyone’s professional email with from<br/>
                            their name and company domain.</p>
                    </div>
                    <div style={{borderRadius: "20px", background: 'rgba(217, 217, 217, 0.09)', backdropFilter: 'blur(42px)', height: "259px", display:'flex' ,alignItems: "center",width: "409px",justifyContent: "center", paddingLeft: "10px"}}>
                        <div>
                            <DataComponents/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='supercharge'>
                <div className='inner-supercharge'>
                    <div className='supercharge-descp'>
                        <div style=
                           {{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: 'flex-start',
                                fontFamily: 'Space Grotesk',
                                lineHeight: 'normal'
                            }}>
                            <h1 style={{margin: "0px", color: '#FFF'}}>Supercharge your Lead Generation SaaS</h1>
                            <h1 style={{color: '#FFF'}}>with our robusts API’s.</h1>
                        </div>
                        <p style={{display: 'flex', justifyContent:'flex-start', color: '#599CFF'}}>100% Free Access to All API’s</p>
                    </div>
                    <div>
                        <button className='signup-free'>Signup for free</button>
                    </div>
                </div>
            </div>
        </div>

        <div style={{display: 'flex', justifyContent: "center"}}>
            <div className='footer'>
                <div className='footer-conainer' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around',paddingTop: '25px'}}>
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
                <div>
                <p className='footer-heading' style={{color: '#599CFF',fontFamily: 'Inter',paddingTop: '32px'}}>Made with love by Draftss.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage