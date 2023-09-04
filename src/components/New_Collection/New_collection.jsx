import React from 'react'
import './New_collection.css'

function New_collection() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide carosel_container" data-bs-ride="true">
                <div class="carousel-indicators new_collection_carousel_indicators mb-5 ms-5">
                    <div className=''>
                        <div className='div' style={{ lineHeight: "0.8rem" }}>01</div>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active slider_indicator" aria-current="true" aria-label="Slide 1"></button></div>

                    <div>
                        <div style={{ lineHeight: "0.8rem" }}>02</div>
                        <button type="button" className='slider_indicator ' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div>
                        <div style={{ lineHeight: "0.8rem" }}>03</div>
                        <button type="button" className='slider_indicator' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div>
                        <div style={{ lineHeight: "0.8rem" }}>04</div>
                        <button type="button" className='slider_indicator' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='new_collection_img1'>
                            <div className="container new_collection_container pt-5">

                                <div className='mt-5 ms-5 new_coll_div'>NEW COLLECTION</div>
                                <h1 className='ms-5 menswear_div'>Menswear 2020</h1>
                                <div className='ms-5 mt-5'>
                                    <button type="button" style={{ border: "1px solid #17696A", color: "#17696A" }} class="btn me-3 btn-outline-primary shop_btn">Shop sale</button>
                                    <button class="btn btn-primary shop_btn" style={{ backgroundColor: "#17696A" }} type="submit">Shop the menswear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='new_collection_img2'>
                            <div className="container new_collection_container pt-5">
                                <div className='mt-5 ms-5 new_coll_div text-light'>NEW COLLECTION</div>
                                <h1 className='ms-5 menswear_div text-light'>Womenswear 2020</h1>
                                <div className='ms-5 mt-5'>
                                    <button type="button" style={{ border: "1px solid #17696A", color: "#17696A" }} class="btn me-3 btn-outline-primary shop_btn text-light">Shop sale</button>
                                    <button class="btn btn-primary shop_btn" style={{ backgroundColor: "#17696A" }} type="submit">Shop the menswear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='new_collection_img3'>
                             <div className="container new_collection_container pt-5">
                                
                                <div className='mt-5 ms-5 new_coll_div '>NEW COLLECTION</div>
                                <h1 className='ms-5 menswear_div'>Menswear 2020</h1>
                                <div className='ms-5 mt-5'>
                                    <button type="button" style={{ border: "1px solid #17696A", color: "#17696A" }} class="btn me-3 btn-outline-primary shop_btn">Shop sale</button>
                                    <button class="btn btn-primary shop_btn" style={{ backgroundColor: "#17696A" }} type="submit">Shop the menswear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='new_collection_img4'>
                        <div className="container new_collection_container pt-5">
                                
                                <div className='mt-5 ms-5 new_coll_div'>NEW COLLECTION</div>
                                <h1 className='ms-5 menswear_div'>Menswear 2020</h1>
                                <div className='ms-5 mt-5'>
                                    <button type="button" style={{ border: "1px solid #17696A", color: "#17696A" }} class="btn me-3 btn-outline-primary shop_btn">Shop sale</button>
                                    <button class="btn btn-primary shop_btn" style={{ backgroundColor: "#17696A" }} type="submit">Shop the menswear</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <div className="right_arrow d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-arrow-left-long  "></i>
                </div>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <div className="right_arrow d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-arrow-right-long  "></i>
                </div>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container images_container">
                <div className="row d-flex justify-content-center ">
                    <div className="col-3 ">
                        <img className='w-100'  src="./Assests/Images/women's.png" alt="" />
                    </div>
                    <div className="col-3">
                        <img className='w-100' src="./Assests/Images/men's.png" alt="" />
                    </div>
                    <div className="col-3">
                        <img className='w-100' src="./Assests/Images/kid's.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default New_collection