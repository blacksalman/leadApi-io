import React from 'react';
import './DataComponents.css'

function DataComponents() {
    
    
  return (
        <div>
            <di style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"valid_format"</p>: <p className='value'>true,</p>
            </di>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"deliverable"</p>: <p className='value'>true,</p>
            </div>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"full_inbox"</p>: <p className='value'>false,</p>
            </div>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"host_exists"</p>: <p className='value'>true,</p>
            </div>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"catch_all"</p>: <p className='value'>false,</p>
            </div>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"disposable"</p>: <p className='value'>false,</p>
            </div>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"message"</p>: <p className='value'>"You can send messages to this Email ID",</p>
            </div>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"email"</p>: <p className='value'>"ryan@producthunt.com",</p>
            </div>
            <div style={{display: 'flex', flexDirection: "row"}}>
                <p className='key'>"domain"</p>: <p className='value'>"producthunt.com"</p>
            </div>
        </div>
  )
}

export default DataComponents