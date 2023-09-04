import React from 'react';

const RHS = () => {
    return (
        <>
            <div className="container sidebar mt-5">
                <div className="row">
                    <div className="col-6" style={{ backgroundColor: "red" }}>hgvgj</div>
                    <div className="col-6" style={{ backgroundColor: "gr" }}>

                        <div className="row">
                            <div className="col-2">$15.50</div>
                            <div className="col-2 p-0">$30.00</div>
                            <div className="col-2"><span style={{ backgroundColor: "red", color: "white" }} className="p-1" >-50%</span></div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <img src="./Assests/Images/filled.svg" alt="Not Available" />
                                        <img src="./Assests/Images/filled.svg" alt="Not Available" />
                                        <img src="./Assests/Images/filled.svg" alt="Not Available" />
                                        <img src="./Assests/Images/filled.svg" alt="Not Available" />
                                        <img src="./Assests/Images/outline.svg" alt="Not Available" />
                                    </div>
                                    <div className="col-12 d-flex justify-content-center">
                                        <span>12 reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <span>Color</span>
                            </div>
                            <div className="col-12 mb-3">
                                <img className='me-1' src="./Assests/Images/color-swatch-blue.svg" alt="Not Available" />
                                <img className='me-1' src="./Assests/Images/color-swatch-yellow.svg" alt="Not Available" />
                                <img className='me-1' src="./Assests/Images/color-swatch-pink.svg" alt="Not Available" />
                                <span className='me-2'>Pink</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <span>Size</span>
                            </div>
                            <div className="row">
                                <div className="col-6 mt-2">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected disabled value="">Please select</option>
                                        <option value="0">S</option>
                                        <option value="1">M</option>
                                        <option value="2">Xl</option>
                                        <option value="3">Xxl</option>
                                    </select>
                                </div>
                                <div className="col-6 d-flex justify-content-end mb-5">
                                    <img src="./Assests/Images/hanger.svg" alt="not available" className='img-fuid me-2' style={{ width: "20px", height: "20px" }} />
                                    <span>Size Chart</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-2">
                                    <input type="number" placeholder='1' className='w-75'/>
                                </div>
                                <div className="col-4" style={{ backgroundColor: "#17696A", color: "white" }}>
                                    <i className="fa-solid fa-cart-shopping m-2" ></i>
                                    <span>Add to Cart</span>
                                </div>
                                <div className="col-4">
                                    <div style={{ border: "1px solid #17696A", color: "#17696A" }} >
                                        <img className='mx-3' src="./Assests/Images/heart.svg" alt="Not Available" />
                                        <span>Favourite</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-12 fw-bold">
                                <span>Delivery</span>
                            </div>
                            <div className="col-12 mt-3">
                                Free standard shipping on orders over $35 before tax, plus free returns.
                            </div>
                            <div className="col-12 mt-2 d-flex justify-content-center">
                                <table class="table">
                                    <thead>
                                        <tr className='text-muted fw-lighter'>
                                            <th scope="col">TYPE</th>
                                            <th scope="col">HOW LONG</th>
                                            <th scope="col">HOW MUCH</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Standard delivery</td>
                                            <td>1-4 business days</td>
                                            <td>$4.50</td>
                                        </tr>
                                        <tr>
                                            <td>Express delivery</td>
                                            <td>1 business day</td>
                                            <td>$10.00</td>
                                        </tr>
                                        <tr>
                                            <td>Pick up in store</td>
                                            <td>1-3 business days</td>
                                            <td>Free</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-10 fw-bold">
                                <span>Return</span>
                            </div>
                            <div className="col-12 mt-3">
                                You have 60 days to return the item(s) using any of the following methods:
                            </div>
                            <div className="col-12 mt-3">
                                <img className='me-3' src="./Assests/Images/bullet.svg" alt="Not Available" />
                                <span>Free store return</span>
                            </div>
                            <div className="col-12 mt-3">
                                <img className='me-3' src="./Assests/Images/bullet.svg" alt="Not Available" />
                                <span>Free returns via USPS Dropoff Service</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-11 ms-3 mt-3 " style={{borderTop:"1px solid #E5E8ED"}}></div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-12">
                                Share : 
                                <img className='mx-3' src="./Assests/Images/Facebook.svg" alt="Not Available" />
                                <img className='mx-3' src="./Assests/Images/Twitter.svg" alt="Not Available" />
                                <img className='mx-3' src="./Assests/Images/pinterest.svg" alt="Not Available" />
                            </div>
                            <div className="col-12 mt-3 mb-3">
                                <img className='mx-3' src="./Assests/Images/visa.svg" alt="Not Available" />
                                <img className='mx-3' src="./Assests/Images/master-card.svg" alt="Not Available" />
                                <img className='mx-3' src="./Assests/Images/pay-pal.svg" alt="Not Available" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RHS;
