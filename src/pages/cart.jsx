import React from 'react'
import { CartContext } from '../App';
import { useContext } from 'react';

function Cart() {
    const { cart, setCart} = useContext(CartContext);
    const handleClearCart = () => {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

const  handleDelete = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}
const handleChange = () => {

}
const handleQtyIncrease = (item) => {
    const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}
        const handleQtyDecrease =(item) => {
    const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, qty: Math.max(cartItem.qty - 1, 1) } : cartItem
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}
    if (cart.length === 0) {
        return <div>Cart is empty</div>
    
        }
    // Calculate grand total before returning JSX
    const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    return (
        <>
            <div className="container">
               
                <table className="table">
  <thead>
    <tr>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Total</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {
        cart.map(item=> {
            return (
                <tr key={item.id}>
                    <td><img src={item.image} alt={item.title} style={{ width: '50px' }} /></td>
                    <td>{item.title}</td>
                    <td>Rs.{item.price}</td>
                    <td>
                      <div className='d-flex'>
                        <button className='btn btn-dark' onClick={()=>handleQtyDecrease(item)}>-</button>
                        <input type="text" className='form-control' value={item.qty} onChange={handleChange} style={{width:'40px'}} name="" id="" />
                        <button className='btn btn-dark' onClick={()=>handleQtyIncrease(item)}>+</button>
                      </div>
                        </td>
                        
                          <td>
                            Rs.{(item.price * item.qty).toFixed(2)}
                            </td>
                        
                    <td>
                        <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Remove</button>
                    </td>
                </tr>
            )
        })
    }
    </tbody>
</table>
<div className="d-flex align-items-center mt-3">
  <button className="btn btn-danger me-3" onClick={handleClearCart}>Clear Cart</button>
  <h5 className="mb-0">Grand Total: <span style={{color: 'green'}}>Rs.{grandTotal.toFixed(2)}</span></h5>
  
</div>
            </div>
        </>
    )
}
export default Cart;