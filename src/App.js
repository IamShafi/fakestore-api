import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import ProductDetails from'./pages/ProductDetails'
import Sidebar from './pages/Sidebar'
import Header from './pages/Header'
import Footer from './pages/Footer'

const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  </div>;
};

export default App;
