

import './App.css'
import Home from "./pages/Home";
import About from "./pages/about";
import Navbar from "./components/Navbar" 
import Services from "./pages/services" 
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import { BrowserRouter, Routes, Route } from "react-router";



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;