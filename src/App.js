// import logo from './logo.svg';
// import './App.css';
// import Header1 from './component/Header/Header1';
// import Header2 from './component/Header/Header2';
// import Header3 from './component/Header/Header3';
// import Footer from './component/Footer/Footer';
// import New_collection from './component/New_Collection/New_collection';

// import Basic_hooded from './component/Basic_hodded/Basic_hooded';

// import Subscribe_for_updates from './component/Subscribe_for_updates/Subscribe_for_updates';
// import Shipping from './component/shipping/Shipping';


// function App() {
//   return (
//     <>
//     <Header1/>
//     <Header2/>
//     <Header3/>
//     <New_collection/>

//     <Basic_hooded/>
//     <Trending_now/>
//     <Subscribe_for_updates/>
//     <Shipping/>
//     <Footer/>
//     </>

//       );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import PopularCategory from './components/PopularCategory/PopularCategory';
import Brands from './components/Brands/Brands';
import FashionBlog from './components/FashionBlog/FashionBlog';
import Baner from './components/Banner/Baner';
import Breadcrump from './components/Breadcrump/Breadcrump';
import RHS from './components/RHS/RHS';
import Instagram from './components/Instagram/Instagram';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header1 from './components/Header/Header1';
import Header2 from './components/Header/Header2';
import Header3 from './components/Header/Header3';
import New_collection from './components/New_Collection/New_collection';
import Shipping from './components/shipping/Shipping';
import Interested from './components/You May Be Interested/Interested';
import New_Arrivals from './components/New Arrivals/New_Arrivals';
import Recently_Viewed from './components/Recently Viewed/Recently_Viewed';
import Sale from './components/Sale up to 70%/Sale';
import TrendingNow from './components/Trending Now/TrendingNow';
import Your_Look from './components/Complete Your Look/Your_Look';
import Subscribe_for_updates from './components/Subscribe_for_updates/Subscribe_for_updates';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Breadcrump />}></Route>
          <Route path='/header1' element={<Header1 />}></Route>
          <Route path='/header2' element={<Header2  />}></Route>
          <Route path='/header3' element={<Header3 />}></Route>
          <Route path='/rhs' element={<RHS />}></Route>
          <Route path='/insta' element={<Instagram />}></Route>
          <Route path='/new' element={<New_collection />}></Route>
          <Route path='/ship' element={<Shipping />}></Route>
          <Route path='/subs' element={<Subscribe_for_updates />}></Route>
          <Route path='/baner' element={<Baner />}></Route>
          <Route path='/fashion' element={<FashionBlog />}></Route>
          <Route path='/brands' element={<Brands />}></Route>
          <Route path='/PopularCategory' element={<PopularCategory />}></Route>
          <Route path='/Interested' element={<Interested />}></Route>
          <Route path='/TrendingNow' element={<TrendingNow />}></Route>
          <Route path='/Sale' element={<Sale />}></Route>
          <Route path='/Recently_Viewed' element={<Recently_Viewed />}></Route>
          <Route path='/New_Arrivals' element={<New_Arrivals />}></Route>
          <Route path='/Your_Look' element={<Your_Look />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header1/> */}
      {/* <Baner/> */}
      {/* <Banner/> */}
      {/* <PopularCategory/> */}
      {/* <FashionBlog/> */}
      {/* <Brands/> */}
      {/* <Breadcrump/> */}
    </>
  );
}

export default App;

