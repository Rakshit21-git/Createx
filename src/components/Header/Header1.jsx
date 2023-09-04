import React from 'react';
import "./css/Header1.css";

function Header1() {
    return (
        <>
            <div className='Header1_container pt-2'>
                <div className="container">
                    <div className="row text-light">
                        <div className="col-md-3 col-12 my-auto d-flex justify-content-center">
                            <div><span style={{ color: " rgba(255, 255, 255, 1); " }}>Available 24/7 at</span> (405) 555-0128</div>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-6 col-12 my-auto d-flex justify-content-around ">
                            <div className="">Delivery & returns</div>
                            <div className="">Track order</div>
                            <div className="">Blog</div>
                            <div className="">Contact</div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-6 col-12 row my-auto">
                            <div className="col-6 text-center">
                                <div class="dropdown">
                                    <a className=" text-left py-2 dropdown_btn text-light text-decoration-none"
                                        href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className='flag_img' src="./Assests/Images/american-flag.png" alt="img" />
                                        Eng/ $
                                        <i class="fa-solid fa-chevron-down ms-1 arrow" style={{ color: "#f5f5f5;" }}></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 ">
                                <i class="fa-regular fa-user me-2" style={{ color: "#fcfcfd;" }}></i>
                                <span>Log in / Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header1