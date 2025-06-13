import React, { useState } from 'react'
import cardImg from '../assets/grocey-image.jpg'
import { Rating } from 'react-simple-star-rating'
function ProductCard(props) {
  const [showdiv, setshowdiv] = useState(false)
  const popup = () => {
    setshowdiv(!showdiv);
  }
  return (
  <div className="col-lg-4">
      <div className="card " >
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{ props.product.title }</h5>
        <p className="card-text">Price.{props.product.price}</p>
        <a href="#" className="btn btn-primary" onClick={ popup }>Buy Now</a>
        {
          showdiv ? <div className='small-box'>
            <h1>you have payment</h1>
          </div> : ""
        }
         <Rating readonly = {true} allowFraction = {true} initialValue={props.product.rating.rate}/>

      </div>
    </div>

  </div>
  )
}
export default ProductCard