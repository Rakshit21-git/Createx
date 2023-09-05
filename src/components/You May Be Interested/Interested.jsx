import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Interested.css";


function Interested() {
    
  const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
    
  };
  return (
    <div className="Interested my-5">
      <div className="text-center">
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 jk">
            <div className="mt-5">
        <h3 className="heading">You May be interested in</h3>
        </div>
          <Carousel responsive={responsive} className="mt-4 mx-2">
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
              src="Assests/Images/New_Arrivals/2.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="Assests/Images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>Metal bridge sunglasess</p>
              <h5 className="">$89.95</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
            //   style={{ borderRadius: "20px" }}
              src="Assests/Images/New_Arrivals/4.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="Assests/Images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>BMid-rise slim cropped fit jeans</p>
              <h5 className="">$40.00</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="Assests/Images/Sale/1.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 end-0 mt-2 pe-2 "
                src="Assests/Images/New_Arrivals/5star.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 start-0 mt-2 ps-2 w-25"
                src="Assests/Images/Sale/50.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="Assests/Images/New_Arrivals/wishlist.png"
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
                src="Assests/Images/Trending_Now/1.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 end-0 mt-2 pe-2"
                src="Assests/Images/New_Arrivals/5star.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Shirt with insertion lace trims</p>
                <h5 className="">$49.95</h5>
              </div>
            </div>
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
              src="Assests/Images/New_Arrivals/2.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="Assests/Images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>Metal bridge sunglasess</p>
              <h5 className="">$89.95</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
            //   style={{ borderRadius: "20px" }}
              src="Assests/Images/New_Arrivals/4.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="Assests/Images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>BMid-rise slim cropped fit jeans</p>
              <h5 className="">$40.00</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="Assests/Images/Sale/1.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 end-0 mt-2 pe-2 "
                src="Assests/Images/New_Arrivals/5star.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 start-0 mt-2 ps-2 w-25"
                src="Assests/Images/Sale/50.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="Assests/Images/New_Arrivals/wishlist.png"
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
                src="Assests/Images/Trending_Now/1.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 end-0 mt-2 pe-2"
                src="Assests/Images/New_Arrivals/5star.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Shirt with insertion lace trims</p>
                <h5 className="">$49.95</h5>
              </div>
            </div>
          
            
            
          </Carousel>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
    
  );

}

export default Interested;
