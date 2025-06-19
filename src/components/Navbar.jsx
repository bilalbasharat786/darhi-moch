
 import React, {useState} from 'react'
import { Link } from 'react-router';
import { CountContext } from '../App';
import { useContext } from 'react';
function Navbar(){


  const { count, setCount } = useContext(CountContext);

   const [showMenu,setshowMenu] = useState (false)
    const handleToggle = () =>{
      setshowMenu(!showMenu);
    }
    return(
      <div className= "header">
         <nav className="navbar navbar-expand-lg mb-5">
  <div className="container">
    <Link className="navbar-brand" to="/">E-shop</Link>
    <button className="navbar-toggler" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {
        showMenu? <i className="bi bi-x-lg"></i>:<span className="navbar-toggler-icon"></span>
      }
     
    </button>
    <div className= {`collapse navbar-collapse ${showMenu ? 'show':''}`}id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to="/profile"><i className="bi bi-person"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart"><i className="bi bi-bag">{count}</i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to=""><i className="bi bi-search"></i></Link>
        </li>


      </ul>
    </div>
  </div>
</nav>
</div>
 
    )
}
export default Navbar