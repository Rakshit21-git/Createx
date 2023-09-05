import React from 'react'
import '../Basic_hodded/Basic_hodded.css'

function Basic_hooded() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-7">
                        <h1 className='basic_hooded_heading'>Basic hooded sweatshirt in pink</h1>
                    </div>
                    <div className=" col-3 d-flex justify-content-end">
                        <div className='artno'>Art. No. 183260098</div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-8 col-12">
                            <button type="button" class="btn btn-outline-success general_info_btn">General info</button><span className='mx-md-5 mx-2 general_info_btn' style={{ color: "gray" }}>Product details</span>
                            <span className='general_info_btn' style={{ color: "gray" }}>Reviews<sup>12</sup></span>
                        </div>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col-12">
                        <div className="divider "></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 col-12">
                        <div id="carouselExampleIndicators" class="carousel slide hooded" data-bs-ride="carousel">
                            
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="./Assests/Images/sweatshirt1.png" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="./Assests/Images/sweatshirt3.png" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="./Assests/Images/sweatshirt4.png" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="./Assests/Images/sweatshirt5.png" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="./Assests/Images/sweatshirt3.png" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <div class="carousel-indicators row">
                               
                               <div className="col-2">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                </div>
                                <div className="col-2">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div className="col-2">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="col-2">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                               <div className="col-2">
                               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                               </div>
                              
                            </div>
                            <button class="carousel-control-prev carousel_btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <div className="right_arrow d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-arrow-left-long  "></i>
                </div>
                    <span class="visually-hidden">Previous</span>
                </button>
                            <button class="carousel-control-next carousel_btn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <div className="right_arrow d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-arrow-right-long  "></i>
                </div>
                    <span class="visually-hidden">Next</span>
                </button>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-6 col-12 hooded_col2" style={{ backgroundColor: "gr" }}>

                        <div className="row">
                            <div className="col-2 price">$15.50</div>
                            <div className="col-2 price p-0">$30.00</div>
                            <div className="col-2"><span style={{ backgroundColor: "red", color: "white" }} className="p-1" >-50%</span></div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-center">
                                        <img src="/Assests/Images/filled.svg" alt="Not Available" />
                                        <img src="/Assests/Images/filled.svg" alt="Not Available" />
                                        <img src="/Assests/Images/filled.svg" alt="Not Available" />
                                        <img src="/Assests/Images/filled.svg" alt="Not Available" />
                                        <img src="/Assests/Images/outline.svg" alt="Not Available" />
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
                                <img className='me-1' src="./Assests/Images/color-swatch-active.svg" alt="Not Available" />
                                <img className='me-1' src="./Assests/Images/color-swatch-yellow.svg" alt="Not Available" />
                                <img className='me-1' src="./Assests/Images/color-swatch-blue.svg" alt="Not Available" />
                                <span className='me-2'>Pink</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <span>Size</span>
                            </div>
                            <div className="row  mb-5">
                                <div className="col-6 mt-2">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected disabled value="">Please select</option>
                                        <option value="0">S</option>
                                        <option value="1">M</option>
                                        <option value="2">Xl</option>
                                        <option value="3">Xxl</option>
                                    </select>
                                </div>
                                <div className="col-6 d-flex justify-content-end  align-items-center">
                                    <img src="./Assests/Images/hanger.svg" alt="not available" className='img-fuid me-2' style={{ width: "20px", height: "20px" }} />
                                    <span>Size Chart</span>
                                </div>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-sm-2 col-2 ">
                                    <input type="number" placeholder='1' className='w-sm-50 w-100'/>
                                </div>
                                <div className="col-sm-4 col-5 add_to_cart" style={{ backgroundColor: "#17696A", color: "white" }}>
                                   
                                    <i className="fa-solid fa-cart-shopping m-2" ></i>
                                    <span>Add to Cart</span>
                                    
                                </div>
                                <div className="col-5 favourite">
                                    <div  style={{ border: "1px solid #17696A", color: "#17696A" }} >
                                        <div className="favourite_div">
                                        <img className='mx-sm-2 mx-1' src="./Assests/Images/heart2.svg" alt="Not Available" />
                                        <span>Favourite</span>
                                        </div>
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
                                <img className='mx-3' src="./Assests/Images/Facebook2.svg" alt="Not Available" />
                                <img className='mx-3' src="./Assests/Images/Twitter2.svg" alt="Not Available" />
                                <img className='mx-3' src="./Assests/Images/pinterest2.svg" alt="Not Available" />
                            </div>
                            <div className="col-12 mt-3 mb-3">
                                <img className='mx-3 mt-4' src="./Assests/Images/visa.svg" alt="Not Available" />
                                <img className='mx-3 mt-4' src="./Assests/Images/master-card.svg" alt="Not Available" />
                                <img className='mx-3 mt-4' src="./Assests/Images/pay-pal.svg" alt="Not Available" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basic_hooded