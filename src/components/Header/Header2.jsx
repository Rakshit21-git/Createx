import React from 'react'
import './css/Header2.css'
import { NavLink } from 'react-router-dom'

function Header2() {
    return (
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light ">

                <div className="container  ">
                    <div class="container-fluid Header2_container_fluid row  ">
                        <img className='col-md-2  col-4' src="./Assests/Images/logo.svg" alt="" />
                        <button class="navbar-toggler navbar-btn col-md-1  col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse col-md-10  col-12" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Women</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link font-weight-bold" href="#">Men</a>
                                </li>
                                <li class="nav-item">
                                    <NavLink  className="nav-link girls" to='/sp'>Girls</NavLink>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Boys</a>
                                </li>
                                <li class="nav-item dropdown position-static">
                                    <a class="nav-link  text-danger" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sale
                                    </a>
                                    <ul class="dropdown-menu " style={{width:"100vw"}} aria-labelledby="navbarDropdown">
                                        <div className="container">
                                            <div className="row p-3">
                                                <div className="col-lg-2 col-md-3 col-6 mb-2 Header_dropdown_items">
                                                    <li>New collection</li>
                                                    <li>Best Sellers</li>
                                                    <li>Plus Size</li>
                                                    <li className='text-danger'>Sale up to 70%</li>
                                                </div>
                                                <div className="col-lg-2 col-md-3 col-6 mb-2 Header_dropdown_items">
                                                    <li className='text-dark'>CLOTHES</li>
                                                    <li>Coats</li>
                                                    <li>Jackets</li>
                                                    <li>Suits</li>
                                                    <li>Dresses</li>
                                                    <li>Cardigans & sweaters</li>
                                                    <li>Sweatshirts & hoodies</li>
                                                    <li>T-shirt & tops</li>
                                                    <li>Pants</li>
                                                    <li>Jeans</li>
                                                    <li>Shorts</li>
                                                    <li>Skirts</li>
                                                    <li>Lingerie & nightwear</li>
                                                    <li>Sportswear</li>
                                                    <li>Swimwear</li>
                                                </div>
                                                <div className="col-lg-2 col-md-3 col-6 mb-2 Header_dropdown_items">
                                                    <li className='text-dark'>SHOES</li>
                                                    <li>Boots</li>
                                                    <li>Flat shoes</li>
                                                    <li>Heels</li>
                                                    <li>Sandals</li>
                                                    <li>Mules</li>
                                                    <li>Sliders</li>
                                                    <li>Slippers</li>
                                                    <li>Sneakers</li>
                                                    <li>Leather</li>
                                                </div>
                                                <div className="col-lg-2 col-md-3 col-6  mb-2 Header_dropdown_items">
                                                    <li className='text-dark'>ACCESSORIES</li>
                                                    <li>Bags & bagpacks</li>
                                                    <li>Hats & scarves</li>
                                                    <li>Hair accessories</li>
                                                    <li>Belts</li>
                                                    <li>Jewellery</li>
                                                    <li>Watches</li>
                                                    <li>Sunglasses</li>
                                                    <li>Purses</li>
                                                    <li>Gloves</li>
                                                    <li>Socks & tights</li>
                                                </div>
                                                {/* <div className="col-1 vr  divider"></div> */}
                                                <div className="col-lg-3 col-12 Header_dropdown_items">
                                                    <img className='dropdown_img' src="./Assests/Images/image.png" alt="" />
                                                    <div className='my-2' style={{fontSize:"0.8rem "}}>Back to school. Sale up to 50%</div>
                                                    <button type="button" class="btn w-50" style={{border:"1px solid #17696A" , color: "#17696A",fontSize:"0.8rem" }}>See offers <i class="fa-solid fa-arrow-right-long" style={{color: "#17696A"}}></i></button>

                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>

                            </ul>
                            <form class="col-md-6 col-12 row ">
                                <div class="p-1 bg-light rounded shadow-sm header_search  col-sm-8 col-12 my-auto mx-auto">
                                    <div class="input-group">
                                        <input type="search" placeholder="Search for products.." class="form-control border-0 bg-light" />
                                        <div class="input-group-append">
                                            <button id="button-addon1" type="submit" class="btn "><i class="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2  my-auto justify-content-center d-flex'>
                                    <img className='me-1 ms-2  ' src="./Assests/Images/Heart.svg" alt="" />2
                                </div>
                                <div className='col-2 d-flex text-light align-items-center'>
                                    <img className='me-1' src="./Assests/Images/cart.svg" alt="" />< span className='cart_span px-2'>4</span>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header2