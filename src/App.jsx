

import './App.css'

import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { useState } from 'react'
import {product}from './data'
 

function App() {

 // const [products, setProduct] = useState(products)
  console.log(product)
 


  return (
    <>
     <Navbar/>
     <div className="container ">
      <div className="row">
      {
        product.map(product=>
          
          <ProductCard  product={product}/> 
      
    
        )
      }
      </div>
       </div>
      
     
    </>
  )
}

export default App
