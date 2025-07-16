import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 // Adjust the path as needed

function DetailPage() {
  const { slug } = useParams();
  const productDetails = product.find(item => item.slug === slug);
useEffect(() => {
    // Pehle sab products fetch karo, phir slug match karo
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item =>
          item.title.toLowerCase().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '') === slug
        );
        setProduct(found);
      });
  }, [slug]);
  const [product, setProduct] = useState(null);
  if (!productDetails) {
    return <div>Product not found</div>;
  }
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