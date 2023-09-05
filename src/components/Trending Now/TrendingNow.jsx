import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TrendingNow.css";


function TrendingNow() {
    
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
    <div className="TrendingNow my-5">
      <div className="text-center">
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 jk">
            <div className="mt-5">
        <h1 className="heading">Trending Now</h1>
        </div>
          <Carousel responsive={responsive} className="mt-4 mx-2">
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
                src="Assests/Images/Trending_Now/2.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 end-0 mt-2 pe-2"
                src="Assests/Images/New_Arrivals/4star.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Chrono watch with blue leather belt</p>
                <h5 className="">$89.95</h5>
              </div>
            </div>
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="Assests/Images/Trending_Now/3.png"
                alt="Card image"
              />
              
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Check coat with colour contrast</p>
                <h5 className="">$20.40</h5>
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
                <h5 className="">$18.51</h5>
              </div>
            </div>
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="Assests/Images/Trending_Now/2.png"
                alt="Card image"
              />
              <img
                className="position-absolute top-0 end-0 mt-2 pe-2"
                src="Assests/Images/New_Arrivals/4star.png"
                alt="Card image"
              />
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Chrono watch with blue leather belt</p>
                <h5 className="">$89.95</h5>
              </div>
            </div>
            <div className="card slider-card border-0 mb-5 mx-2">
              <img
                className="position-relative"
                src="Assests/Images/Trending_Now/3.png"
                alt="Card image"
              />
              
              <img
                className="position-absolute bottom-30 end-0 me-2"
                src="Assests/Images/New_Arrivals/wishlist.png"
                alt="Card image"
              />
              <div className="card-body ">
                <p>Check coat with colour contrast</p>
                <h5 className="">$20.40</h5>
              </div>
            </div>
          </Carousel>
          <div className="d-flex justify-content-center mb-5">
          <button className="text-success border-success btn">Explore top sales</button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
    
  );

}

export default TrendingNow;
