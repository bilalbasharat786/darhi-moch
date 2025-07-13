import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
// import product from '../data/product'; // Adjust the path as needed
function Home() {
  const [products, setProducts] = useState([]);

  // Uncomment and use this function if you plan to fetch products from the API
  const getProductsFromAPI = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };
// If you want to use local data instead, you can uncomment the following line
  useEffect(() => {
    getProductsFromAPI();
  }, []);

  const handleSearch = (e) => {
   if(e.target.value){
      const filteredProducts = products.filter((product) => 
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setProducts(filteredProducts);
    }else {
      getProductsFromAPI();
   }
  };
  return (
    <>
      <div className="container">
        <input
          type="search"
          className="mb-3"
          name=""
          id=""
          onChange={handleSearch}
        />
        <button>Search</button>
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
