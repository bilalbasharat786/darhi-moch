
 import React, {useState} from 'react'
function Navbar(){
   const [showMenu,setshowMenu] = useState (false)
    const handleToggle = () =>{
      setshowMenu(!showMenu);
    }
    return(
      <div className= "header">
         <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#">E-shop</a>
    <button className="navbar-toggler" onClick={handleToggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {
        showMenu? <i className="bi bi-x-lg"></i>:<span className="navbar-toggler-icon"></span>
      }
     
    </button>
    <div className= {`collapse navbar-collapse ${showMenu ? 'show':''}`}id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>
       
        <li className="nav-item">
          <a href="#" className="nav-link" >About</a>
        </li>
      </ul>
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " href="#"><i className="bi bi-person"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="bi bi-bag"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="bi bi-search"></i></a>
        </li>
       
      
      </ul>
    </div>
  </div>
</nav>
</div>
 
    )
}
export default Navbar