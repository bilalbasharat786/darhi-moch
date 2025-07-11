import React from "react"
import { useParams } from 'react-router';
import product from '../data/product'; // Adjust the path as needed

function DetailPage() {
  const { slug } = useParams();
  const productDetails = product.find(item => item.slug === slug);

  return (
    <div className="container">
      <h1>{productDetails.title}</h1>
      <img src={productDetails.image} alt={productDetails.title} />
      <p>{productDetails.description}</p>
      <p>Price: ${productDetails.price}</p>
      <p>Category: {productDetails.category}</p>
      <p>Rating: {productDetails.rating.rate} ({productDetails.rating.count} reviews)</p>
    </div>
  )
}

export default DetailPage;