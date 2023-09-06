import React from 'react'
import './shipping.css'

function Shipping() {
    return (
        <>
            <div className="container my-4">
                <div className="row justify-content-between">
                    <div className="col-md-2 col-5 text-center shipping_cols mt-3">
                        <img src="Assests/Images/ic-delivery.svg"  alt="" />
                        <div>Fast Worldwide Shipping</div>
                        <div className='shipping_div'>Get free shipping over $250</div>
                    </div>
                    <div class="vr-1 col-1 mt-3"></div>
                    <div className="col-md-2 col-5 text-center shipping_cols mt-3">
                        <img src="Assests/Images/ic-call-center.svg "  alt="" />
                        <div>24/7 Customer Support</div>
                        <div className='shipping_div'>Friendly 24/7 customer support</div>
                    </div>
                    <div class=" col-1 vr-3 mt-3"></div>
                    <div className="col-md-2 col-5 mt-3 text-center shipping_cols">
                        <img src="Assests/Images/ic-shield.svg" alt="" />
                        <div>Money Back Guarantee</div>
                        <div className='shipping_div'>We return money within 30 days</div>
                    </div>
                    <div class="vr-1 col-1 mt-3"></div>
                    <div className="col-md-2 col-5 text-center shipping_cols mt-3">
                        <img src="Assests/Images/ic-credit-card.svg" alt="" />
                        <div>Secure Online Payment</div>
                        <div className='shipping_div'>Accept all major credit cards</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shipping