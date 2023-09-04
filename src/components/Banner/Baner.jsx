import React from 'react';
import "./Banner.css"

const Baner = () => {
    return (
        <div className="container-fluid banner mt-5">
            <div className="row firstRow d-flex justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-4 first me-3">
                    <div className="row">
                        <div className="col-10 ms-4 mt-5 ">SUMMER COLLECTION</div>
                        <div className="col-10 fw-bold ms-4 fs-3 ">Sale Up to 70%</div>
                    </div>
                    <div className="col-10">
                        <button className='btn mt-4 ms-4 fw-bold ExploreButton'>Explore new prices</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-7 second">
                    <div className="row">
                        <div className="col-10 mt-5 ms-4">
                            DEAL OF THE WEEK
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 fw-bold ms-4 fs-2" >Stay Warm With Our New Sweaters</div>
                    </div>
                    <div className="col-10">
                        <button className='btn ms-4 fw-bold mt-4 ExploreButton'>Shop now</button>
                    </div>
                </div>
            </div>

            <div className="row mt-3 d-flex secondrow justify-content-center mb-5">
                <div className="col-sm-12 col-md-6 col-lg-7 third me-3">
                    <div className="row">
                        <div className="col-10 mt-5 ms-4">
                            NEW COLLECTON
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 fw-bold ms-4 fs-3" >Shoes & Bags autumn / winter 2020</div>
                    </div>
                    <div className="col-10">
                        <button className='btn px-4 mt-4 ms-4 fw-bold mt-3 ExploreButton'>See offers<i className="ms-2 fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4  four">
                    <div className='fourth'></div>
                    <div className="row">
                        <div className="col-10 mt-5 ms-4">
                            FOR ALL NEW EMAIL SUBSCRIBERS
                        </div>
                        <div className="col-10 fw-bold ms-4 fs-3" >
                            Get 5% Off & Free Delivery
                        </div>
                        <div className="col-10 ms-4 mt-4">Email</div>
                    </div>
                    <div className="row mt-2 ms-3">
                        <div className="col-6">
                            <input className='px-3 py-2' style={{ border: "none" }} type="text" placeholder='Your working email' />
                        </div>
                        <div className="col-6 p-0">
                            <button className='pe-5 py-2 btn SubsBtn'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mt-5 ms-4">
                            *Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Baner;
