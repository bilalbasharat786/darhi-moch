

import './App.css'
import Home from "./pages/Home";
import About from "./pages/about";
import Navbar from "./components/Navbar" 
import Services from "./pages/services" 
import DetailPage from "./pages/DetailPage" 
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
        <Route path="/product/:slug" element={<DetailPage />} />
        {/* You can add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;