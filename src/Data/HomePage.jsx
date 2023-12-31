import React from 'react'
import "./HomePage.css"
import ImageOne from '../images/image-1.png'
import ImageTwo from '../images/image-2.png'
import ImageThree from '../images/image-3.png'
import DataComponents from './DataComponents'
import { Link } from 'react-router-dom'
 
function HomePage() {
    const handleApiClick = () => {
        window.scrollTo({
            top: 730,
            behavior: "smooth"
        })
    }
  return (
    <div className='home-container'>

    <div className='home-nav'>
        <div className='logo-header'>
            <h1 className='logo'>LeadApi.io</h1>
        </div>
        <div className='nav-link'>
          <Link to="/" className='home-link'>Home</Link>
          <Link to="/login" className='login-link'>Login</Link>
          <a href='/#' smooth={true} className='api-link' onClick={handleApiClick}>Api</a>
          <Link to="/signup" className='signup-link'>Signup</Link>
        </div>
    </div>
        <div id='card'>
            <div style={{paddingTop: '150px'}} className='into-section'>
                <h1 className='home-intro'>
                    Lead Generation API’s to supercharge
                </h1>
                <h1 className='home-intro'>
                   your B2B SaaS & Projects.
                </h1>
                <p className='home-intro-para'>100% Free Access to All API’s</p>
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
            <div className='card-section first-card'>
                <div className='card'>
                    <div className='inner-card-section'>
                        <h1 className="data-heading">Live Email Verify API</h1>
                        <p className="data-heading-para">Find if email is valid, deliverable,<br/>
                        full inbox or disposable etc.</p>
                    </div>
                    <div style={{borderRadius: "20px", background: 'rgba(217, 217, 217, 0.09)', backdropFilter: 'blur(42px)', height: "259px", display:'flex' ,alignItems: "center",width: "409px",justifyContent: "center", paddingLeft: "10px"}}>
                        <div>
                            <DataComponents/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-section second-section'>
                <div className='card'>
                    <div style={{borderRadius: "20px", background: 'rgba(217, 217, 217, 0.09)', backdropFilter: 'blur(42px)', height: "259px", display:'flex' ,alignItems: "center",width: "409px",justifyContent: "center",paddingLeft: "10px"}}>
                        <div>
                          <DataComponents/>
                        </div>
                    </div>
                    <div className='inner-card-section second-card-section'>
                        <h1 className="data-heading">Live Email Finder API</h1>
                        <p className="data-heading-para">Find anyone’s professional email with from<br/>
                          their name and company domain.</p>
                    </div>
                </div>
            </div>

            <div className='card-section'>
                <div className='card'>
                    
                    <div className='inner-card-section'>
                        <h1 className="data-heading">Website to Email API</h1>
                        <p className="data-heading-para">Find anyone’s professional email with from<br/>
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
                            <h1 className='supercharge-heading'>Supercharge your Lead Generation SaaS</h1>
                            <h1 className='supercharge-heading'>with our robusts API’s.</h1>
                        </div>
                        <p className="super-charge-para">100% Free Access to All API’s</p>
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
                        <Link to="/" className='home-link'>Home</Link>
                        <Link to="/login" className='login-link'>Login</Link>
                        <a href='/#' smooth={true} className='api-link' onClick={handleApiClick}>Api</a>
                        <Link to="/signup" className='signup-link'>Signup</Link>
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