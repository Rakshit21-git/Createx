import React from 'react'
import './Subscribe.css'

function Subscribe_for_updates() {
  return (
    <>
    <div className='subscribe_main_div'>
        <div className="container ">
            <div className="row ">
                <div className="col-12 subscribe_div my-5">
                    <h2 className='my-2 subscribe_head'>Subscribe for updates</h2>
                    <div className='sub_div my-4'>Subscribe for exclusive early sale access and new arrivals.</div>
                    <div className="row  ms-1">
                    <button className='btn btn-outline-secondary subscribe_btn'>Women</button>
                    <button className='btn btn-outline-secondary  mx-2 subscribe_btn'>Men</button>
                    <button className='btn btn-success  me-2 subscribe_btn'>Girls</button>
                    <button className='btn btn-outline-secondary  subscribe_btn'>Boys</button>
                    </div>
                    <label htmlFor="" className='sub_div mt-4 mb-2'>Email</label>
               <div className='subscribe_input_div'>
               <input type="text" className=' subscribe_input w-100' placeholder='Your working email' />
                <button className='subscribe_input_btn btn btn-success'>Subscribe</button>
                </div>
                <div className='mt-4'><img src="/Assests/Images/checked.svg" className='me-2' alt="" />
                <span className='check_div'>I agree to receive communications from Createx Store.</span></div>
                <div className="subscribe_img"></div>
               </div>
                              
            </div>
        </div>
    </div>
    </>
  )
}

export default Subscribe_for_updates