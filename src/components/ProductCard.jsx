import React, { useState } from 'react'
import cardImg from '../assets/grocey-image.jpg'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router';


function ProductCard(props) {
  function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')   // non-word characters ya space ko '-' se replace karo
    .replace(/^-+|-+$/g, '');    // starting ya ending '-' ko hatao
}

  const [showdiv, setshowdiv] = useState(false)
  const popup = () => {
    setshowdiv(!showdiv);
  }
  return (
    <>
  <div className="col-lg-4">
      <div className="card " >
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="#" className="btn btn-primary" onClick={ popup }>Add To Card</a>
        <Link to={`/product/${slugify(props.product.title)}`} style={{ textDecoration: 'none', color: 'black' }}>
        <h5 className="card-title">{ props.product.title }</h5>
        </Link>
        <p className="card-text">Price.{props.product.price}</p>
        
        {
          showdiv ? <div className='small-box'>
            <h1>Do you have payment</h1>
          </div> : ""
        }
         <Rating readonly = {true} allowFraction = {true} initialValue={props.product.rating.rate}/>
                                    
      </div>
    </div>

  </div>
  </>
  )
}
export default ProductCard