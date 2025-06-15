import React from "react"

import ProductCard from '../components/ProductCard'
import {product} from '../data'
function Home() {
    return (
        <>
        <div className="container">
        <div className="row">
          {
            product.map((item, index) => (
              <ProductCard key={item.id || index} product={item} />
            ))
          }
        </div>
      </div>
         </>

    )
}
export default Home;
