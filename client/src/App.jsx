import React from 'react'
import './App.css'
import Home from "./pages/Home";
import About from "./pages/about";
import Navbar from "./components/Navbar" 
import Services from "./pages/services" 
import DetailPage from "./pages/DetailPage" 
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import { BrowserRouter, Routes, Route } from "react-router";
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import Contact from './pages/Contact';

export const CartContext = createContext();

export default function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartFormStorage = JSON.parse(localStorage.getItem('cart'))
    
      setCart(cartFormStorage || []);
    
  }, [])

 useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [ cart ]);

  return (
    <>
      <CartContext.Provider value={{cart, setCart }}>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:slug" element={<DetailPage />} />
          <Route path="/contact" element={ <Contact />} />
          {/* You can add more routes here as needed */}
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    </>
  )
}
