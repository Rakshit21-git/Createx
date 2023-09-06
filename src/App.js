import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHeader from './components/Header/MainHeader/MainHeader';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/sp' element={<SingleProduct />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

