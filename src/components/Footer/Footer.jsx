import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className='Footer_container'>
        <div className="container   py-5">
          <div className="row justify-content-around">

            <div className="col-md-2 col-sm-6 col-12 Footer_div ">
              <h6 className='text-light'>HELP</h6>
              <h6>Delivery & returns</h6>
              <h6>FAQ</h6>
              <h6>Track order</h6>
              <h6>Contact</h6>
              <h6>Blog</h6>
            </div>
            <div className="col-md-2 col-sm-6 col-12 Footer_div">
              <h6 className='text-light'>SHOP</h6>
              <h6>New arrivals</h6>
              <h6>Trending now</h6>
              <h6>Sales</h6>
              <h6>Brands</h6>
            </div>
            <div className="col-md-3 col-sm-6 col-12 Footer_div footer_div3">
              <h6 className='text-light'>GET IN TOUCH</h6>
              <h6>Call: <span>(405) 555-0128</span></h6>
              <h6>Email: <span>hello@createx.com</span></h6>
              <div className="row social_media">
                <div className="col-2 social_media_div1 " ><img src="./Assests/Images/Facebook.svg" alt="" /></div>
                <div className="col-2"><img src="./Assests/Images/instagram.svg" alt="" /></div>
                <div className="col-2"><img src="./Assests/Images/Twitter.svg" alt="" /></div>
                <div className="col-2"><img src="./Assests/Images/YouTube.svg" alt="" /></div>
                <div className="col-2"><img src="./Assests/Images/pinterest.svg" alt="" /></div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-12  me-md-4 Footer_div footer_div4 text-light ">
              <h6 className='mb-3'>DOWNLOAD OUR APP</h6>
              <div className="row mt-0">
                <div className="col-md-6 col-5 me-1 footer_img"><img src="./Assests/Images/app-store.svg" alt="" />
                </div>
                <div className="col-4 footer_img" ><img src="./Assests/Images/google-play.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer_divider '></div>
        <div className="container  py-3">
          <div className="row justify-content-between ">
          <div className="col-md-4 col-12 text-center">
        <div className='Fd'>© All rights reserved. Made with <img src="Assests/Images/green_heart.svg" alt="" /> by Createx Studio</div> 
        </div>
        <div className="col-md-2 col-12 Fd text-center">
          Go to top
        </div>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default Footer