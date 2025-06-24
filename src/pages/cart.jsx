import React from 'react'
import { CartContext } from '../App';
import { useContext } from 'react';

function Cart() {
    const { cart, } = useContext(CartContext);
    return (
        <>
            <div className="container">
               
                <table class="table">
  <thead>
    <tr>
      <th scope="col">image</th>
      <th scope="col">title</th>
      <th scope="col">Price</th>
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
                        <button className="btn btn-danger" onClick={() => console.log('Remove item')}>Remove</button>
                    </td>
                </tr>
            )
        })
    }
    </tbody>
</table>
            </div>
        </>
    )
}
export default Cart;