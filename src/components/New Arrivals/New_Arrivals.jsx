import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './New_Arrivals.css'

function New_Arrivals() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      };
  return (
    <div className="new_arrivals">
        <div className="text-center">
            <h1>New Arrival</h1>
            <p>Check out our latest arrivals for the upcoming season <br /> <a href="" className='text-success'>See the collection here</a></p>
        </div>
        <Carousel showDots={true} arrows={false}  responsive={responsive} className="my-5 mx-2" >
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
              style={{ borderRadius: "20px" }}
              src="images/New_Arrivals/1.png"
              alt="Card image"
            />
            <img
              className="position-absolute top-0 end-0 mt-2 pe-2"
              src="images/New_Arrivals/5star.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>Black & white sports cap</p>
              <h5 className="">$18.51</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
              style={{ borderRadius: "20px" }}
              src="images/New_Arrivals/2.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="images/New_Arrivals/wishlist.png"
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
              style={{ borderRadius: "20px" }}
              src="images/New_Arrivals/3.png"
              alt="Card image"
            />
            <img
              className="position-absolute top-0 end-0 mt-2 pe-2"
              src="images/New_Arrivals/4star.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>Green baby romper</p>
              <h5 className="">$20.40</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
              style={{ borderRadius: "20px" }}
              src="images/New_Arrivals/4.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="images/New_Arrivals/wishlist.png"
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
              style={{ borderRadius: "20px" }}
              src="images/New_Arrivals/5.png"
              alt="Card image"
            />
            <img
              className="position-absolute top-0 end-0 mt-2 pe-2"
              src="images/New_Arrivals/5star.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>Red dangle earrings</p>
              <h5 className="">$29.95</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
              style={{ borderRadius: "20px" }}
              src="images/New_Arrivals/6.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>Baby shoes with laces</p>
              <h5 className="">$30.60</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
              style={{ borderRadius: "20px" }}
              src="images/New_Arrivals/1.png"
              alt="Card image"
            />
            <img
              className="position-absolute top-0 end-0 mt-2 pe-2"
              src="images/New_Arrivals/5star.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>Black & white sports cap</p>
              <h5 className="">$18.51</h5>

            </div>
          </div>
          <div className="card slider-card border-0 mb-5 mx-2">
            <img
              className="position-relative"
              style={{ borderRadius: "20px" }}
              src="images/New_Arrivals/2.png"
              alt="Card image"
            />
            <img
              className="position-absolute bottom-30 end-0 me-2"
              src="images/New_Arrivals/wishlist.png"
              alt="Card image"
            />
            <div className="card-body ">
              <p>Metal bridge sunglasses</p>
              <h5 className="">$89.95</h5>

            </div>
          </div>
         
          
        </Carousel>
    </div>
  )
}

export default New_Arrivals