import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Sale.css";


function Sale() {
    
  const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    
  };
  return (
    <div className="Sale my-5">
      <div className="text-center">
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 jk">
            <div className="mt-5">
        <h1 className="heading">Sale up to 70%</h1>
        </div>
          <Carousel responsive={responsive} className="mt-4 mx-2">
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="./Assests/Images/Sale/1.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 end-0 mt-2 pe-2 "
                src="./Assests/Images/New_Arrivals/5star.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 start-0 mt-2 ps-2 w-25"
                src="./Assests/Images/Sale/50.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="./Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Leather bag with gold </p>
                <span className="text-danger fs-5 fw-bold">$89.50</span> <span className="text-decoration-line-through">$179.00</span>
              </div>
            </div>
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="./Assests/Images/Sale/2.png"
                alt="Card image"
              />
               <img
                className="position-absolute top-0 start-0 mt-2 ps-2 w-25"
                src="./Assests/Images/Sale/50.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="./Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Skinny push-up jeans</p>
                <span className="text-danger fs-5 fw-bold">$40.00</span> <span className="text-decoration-line-through">$80.00</span>
              </div>
            </div>
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="./Assests/Images/Sale/3.png"
                alt="Card image"
              />
               <img
                className="position-absolute top-0 end-0 mt-2 pe-2"
                src="./Assests/Images/New_Arrivals/5star.png"
                alt="Card image"
              />
               <img
                className="position-absolute top-0 start-0 mt-2 ps-2 w-25"
                src="./Assests/Images/Sale/20.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="./Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Wide heel  ankle boots</p>
                <span className="text-danger fs-5 fw-bold">$119.16</span> <span className="text-decoration-line-through">$148.95</span>

              </div>
            </div> 
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="./Assests/Images/Sale/1.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 end-0 mt-2 pe-2 "
                src="./Assests/Images/New_Arrivals/5star.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 start-0 mt-2 ps-2 w-25"
                src="./Assests/Images/Sale/50.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="./Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Leather bag with gold </p>
                <span className="text-danger fs-5 fw-bold">$89.50</span> <span className="text-decoration-line-through">$179.00</span>
              </div>
            </div>
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="./Assests/Images/Sale/2.png"
                alt="Card image"
              />
               <img
                className="position-absolute top-0 start-0 mt-2 ps-2 w-25"
                src="./Assests/Images/Sale/50.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="./Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Skinny push-up jeans</p>
                <span className="text-danger fs-5 fw-bold">$40.00</span> <span className="text-decoration-line-through">$80.00</span>
              </div>
            </div>
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="./Assests/Images/Sale/3.png"
                alt="Card image"
              />
               <img
                className="position-absolute top-0 end-0 mt-2 pe-2"
                src="./Assests/Images/New_Arrivals/5star.png"
                alt="Card image"
              />
               <img
                className="position-absolute top-0 start-0 mt-2 ps-2 w-25"
                src="./Assests/Images/Sale/20.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="./Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Wide heel  ankle boots</p>
                <span className="text-danger fs-5 fw-bold">$119.16</span> <span className="text-decoration-line-through">$148.95</span>

              </div>
            </div> 
          </Carousel>
          <div className="d-flex justify-content-center mb-5">
          <button className="text-success border-success btn">See all sale products</button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
    
  );

}

export default Sale;
