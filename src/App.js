import logo from './logo.svg';
import './App.css';
import Header1 from './component/Header/Header1';
import Header2 from './component/Header/Header2';
import Header3 from './component/Header/Header3';
import Footer from './component/Footer/Footer';
import New_collection from './component/New_Collection/New_collection';

import Basic_hooded from './component/Basic_hodded/Basic_hooded';

import Subscribe_for_updates from './component/Subscribe_for_updates/Subscribe_for_updates';
import Shipping from './component/shipping/Shipping';


function App() {
  return (
    <>
    <Header1/>
    <Header2/>
    <Header3/>
    <New_collection/>

    {/* <Basic_hooded/> */}
    {/* <Trending_now/> */}
    {/* <Subscribe_for_updates/> */}
    <Shipping/>
    <Footer/>
    </>

      );
}

export default App;
