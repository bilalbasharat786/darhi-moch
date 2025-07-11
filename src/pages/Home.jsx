import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
function Home() {
  const [products, setProducts] = useState([]);

  // Uncomment and use this function if you plan to fetch products from the API
  const getProductsFromAPI = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    getProductsFromAPI();
  }, []);
  return (
    <>
      <div className="container">
                <button onClick={getProductsFromAPI}>Get Data</button>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
