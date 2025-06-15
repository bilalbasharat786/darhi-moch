

import './App.css'
import Home from "./pages/Home";
import About from "./pages/about";
import Navbar from "./components/Navbar" 
import Services from "./pages/services" 
import { BrowserRouter, Routes, Route } from "react-router";



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;