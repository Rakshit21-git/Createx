import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PopularCategory from './components/PopularCategory/PopularCategory';
import Brands from './components/Brands/Brands';
import FashionBlog from './components/FashionBlog/FashionBlog';
import Baner from './components/Banner/Baner';
import Breadcrump from './components/Breadcrump/Breadcrump';
import RHS from './components/RHS/RHS';
import Instagram from './components/Instagram/Instagram';
import Header1 from './components/Header/Header1';
import Header2 from './components/Header/Header2';
import Header3 from './components/Header/Header3';
import MainHeader from './components/Header/MainHeader/MainHeader';
import New_collection from './components/New_Collection/New_collection';
import Shipping from './components/shipping/Shipping';
import Interested from './components/You May Be Interested/Interested';
import New_Arrivals from './components/New Arrivals/New_Arrivals';
import Recently_Viewed from './components/Recently Viewed/Recently_Viewed';
import Sale from './components/Sale up to 70%/Sale';
import TrendingNow from './components/Trending Now/TrendingNow';
import Subscribe_for_updates from './components/Subscribe_for_updates/Subscribe_for_updates';
import Footer from './components/Footer/Footer';
import Basic_hooded from './components/Basic_hodded/Basic_hooded';
import Your_Look from './components/Complete Your Look/Your_Look';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/header1' element={<Header1 />}></Route>
          <Route path='/header2' element={<Header2  />}></Route>
          <Route path='/header3' element={<Header3 />}></Route>
          <Route path='/Header' element={<MainHeader />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path='/newA' element={<New_Arrivals />}></Route>
          <Route path='/pc' element={<PopularCategory />}></Route>
          <Route path='/look' element={<Your_Look />}></Route>
          <Route path='/baner' element={<Baner />}></Route>
          <Route path='/basicHood' element={<Basic_hooded />}></Route>
          <Route path='/brand' element={<Brands />}></Route>
          <Route path='/fb' element={<FashionBlog />}></Route>
          <Route path='/rhs' element={<RHS />}></Route>
          <Route path='/insta' element={<Instagram />}></Route>
          <Route path='/newc' element={<New_collection />}></Route>
          <Route path='/ship' element={<Shipping />}></Route>
          <Route path='/subs' element={<Subscribe_for_updates />}></Route>
          <Route path='/sale' element={<Sale />}></Route>
          <Route path='/rv' element={<Recently_Viewed />}></Route>
          <Route path='/Interest' element={<Interested />}></Route>
          <Route path='/Trend' element={<TrendingNow />}></Route>
          <Route path='/' element={<Breadcrump />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

