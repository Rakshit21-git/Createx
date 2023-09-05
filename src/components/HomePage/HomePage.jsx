import React from 'react';
import Baner from '../Banner/Baner';
import Brands from '../Brands/Brands';
import Enjoy from '../Enjoy/Enjoy';
import FashionBlog from '../FashionBlog/FashionBlog';
import MainHeader from '../Header/MainHeader/MainHeader';
import Instagram from '../Instagram/Instagram';
import New_Arrivals from '../New Arrivals/New_Arrivals';
import New_collection from '../New_Collection/New_collection';
import PopularCategory from '../PopularCategory/PopularCategory';
import Sale from '../Sale up to 70%/Sale';
import Shipping from '../shipping/Shipping';
import Subscribe_for_updates from '../Subscribe_for_updates/Subscribe_for_updates';
import TrendingNow from '../Trending Now/TrendingNow';

const HomePage = () => {
  return (
   <>
   <New_collection/>
   <New_Arrivals/>
   <Baner/>
   <PopularCategory/>
   <TrendingNow/>
   <Sale/>
   <Enjoy/>
   <Shipping/>
   <Instagram/>
   <FashionBlog/>
   <Brands/>
   <Subscribe_for_updates/>
   </>
  );
}

export default HomePage;
