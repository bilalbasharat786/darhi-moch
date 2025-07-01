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
                    <td>${item.price}</td>
                    <td>
                      <div className='d-flex'>
                        <button className='btn btn-dark'>-</button>
                        <input type="text" className='form-control' value={1} style={{width:'40px'}} name="" id="" />
                        <button className='btn btn-dark'>+</button>
                      </div>
                        </td>
                        <td>
                        ${item.price * 1}
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
<button className="btn btn-danger" onClick={handleClearCart}>Clear Cart</button>
            </div>
        </>
    )
}
export default Cart;