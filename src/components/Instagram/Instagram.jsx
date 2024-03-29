import React from 'react';
import "./Instagram.css"

const Instagram = () => {
    return (
        <>
            <div className="container mt-5 Insta">
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                        <div className="row">
                            <div className="col-12 FlexClass">
                                FOLLOW US ON INSTAGRAM
                            </div>
                            <div className="col-12 fw-bold fs-3 FlexClass">
                                @createx_store
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-5  FlexClass" >
                                <span className='ClassThird p-2' style={{ border: "1px solid #17696A" }}>
                                    <img className='me-1' src="./Assests/Images/Instagram.svg" alt="Not Available" />
                                    <span style={{ color: "#17696A" }}>Follow us on Instagram</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-8 mb-5">
                        <img className=' img-fluid col-sm-4 col-12' src="./Assests/Images/image1.png" alt="Not Available" />
                        <img className=' img-fluid col-sm-4 col-12' src="./Assests/Images/image2.png" alt="Not Available" />
                        <img className=' img-fluid col-sm-4 col-12' src="./Assests/Images/image3.png" alt="Not Available" />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Instagram;
