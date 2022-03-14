import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')

);
