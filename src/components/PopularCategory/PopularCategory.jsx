import React from 'react';
import "./PopularCategory.css"

const PopularCategory = () => {
    return (
        <>
            <div className="container PopularCategory mt-5">
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center ">
                        <h3> Popular categories</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6 col-md-4 col-lg-2">
                        <img className='images' src="./Assests/Images/image1.jpg" alt="not available" />
                        <div className='d-flex justify-content-center mt-2'>Top</div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <img className='images' src="./Assests/Images/image2.jpg" alt="not available" />
                        <div className='d-flex justify-content-center mt-2'>T-shirts</div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <img className='images' src="./Assests/Images/image3.jpg" alt="not available" />
                        <div className='d-flex justify-content-center mt-2'>Cap</div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <img className='images' src="./Assests/Images/image4.jpg" alt="not available" />
                        <div className='d-flex justify-content-center mt-2'>Sandals</div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <img className='images' src="./Assests/Images/image5.jpg" alt="not available" />
                        <div className='d-flex justify-content-center mt-2'>Jackets</div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2">
                        <img className='images' src="./Assests/Images/image6.jpg" alt="not available" />
                        <div className='d-flex justify-content-center mt-2'>Coats</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PopularCategory;
