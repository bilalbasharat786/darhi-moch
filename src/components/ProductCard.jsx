
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router';
import { CartContext } from '../App';
import { useContext } from 'react';

function ProductCard(props) {

  const { cart, setCart } = useContext(CartContext);

  function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')   // non-word characters ya space ko '-' se replace karo
    .replace(/^-+|-+$/g, '');    // starting ya ending '-' ko hatao
}

  

const handleClick = (p) => {
 
const foundItem = cart.find((item) => item.id === p.id)
if (!foundItem) {
  // If the item is already in the cart, you can choose to update its quantity or do nothing
 setCart([...cart, p])
}

}

  return (
    <>
  <div className="col-lg-4">
      <div className="card " >
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <button href="#" className="btn btn-primary" onClick={()=>handleClick(props.product)}>Add To Card - </button>
        <Link to={`/product/${slugify(props.product.title)}`} style={{ textDecoration: 'none', color: 'black' }}>
        <h5 className="card-title">{ props.product.title }</h5>
        </Link>
        <p className="card-text">Price.{props.product.price}</p>
         <Rating readonly = {true} allowFraction = {true} initialValue={props.product.rating.rate}/>
                                    
      </div>
    </div>

  </div>
  </>
  )
}
export default ProductCard