import React from 'react'
import './css/Header3.css'

function Header3() {
  return (
    <>
    <div className='Header3_container'>
        <div className="container">
            <div className="row">
                   <div className="col-12 text-light text-center p-1 Header3_div">
                   <i class="fa-solid fa-chevron-left me-3 " style={{color: "#f4f5f5;" , fontSize:"0.8rem"}}></i> Up to 70% Off. <span className='me-3 text-decoration-underline'>Shop our latest sale styles   </span> <i class="fa-solid fa-chevron-right" style={{color: "#f4f5f5;" , fontSize:"0.8rem"}}></i>
                   </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header3