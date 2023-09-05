import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Your_Look.css";

function Your_Look() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="your_look container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 ">
            <div className="row ">
                <div className="col-6">
            <h1 className="mb-3">Complete Your Look</h1>
            <img src="Assests/Images/Your Look/1.png" alt="" />
            </div>
            <div className="col-6 jk">
            <Carousel
              showDots={true}
              responsive={responsive}
              className="mt-5 mx-2 pt-3"
            >
              <div className="card slider-card border-0 mb-5 mx-2 ">
                <img
                  className="position-relative"
                  //   style={{ borderRadius: "20px" }}
                  src="Assests/Images/Your Look/2.png"
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
                  <p>Leather Sandals</p>
                  <h5 className="">$48.00</h5>
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
                  <p>Chrono watch with blue...</p>
                  <h5 className="">$89.95</h5>
                </div>
              </div>
              <div className="card slider-card border-0 mb-5 mx-2 ">
                <img
                  className="position-relative"
                  //   style={{ borderRadius: "20px" }}
                  src="Assests/Images/Your Look/2.png"
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
                  <p>Leather Sandals</p>
                  <h5 className="">$48.00</h5>
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
                  <p>Chrono watch with blue...</p>
                  <h5 className="">$89.95</h5>
                </div>
              </div>
            </Carousel>
            </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Your_Look;
