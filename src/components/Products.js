import React from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../modules/products/Products.action";
//step 8
const Products = () => {
  const dispatch = useDispatch();
  const handleProducts = () => {
    dispatch(getProducts());
  };

  return (
    <div>
      <h1>products</h1>
      <button onClick={handleProducts}>Get Products</button>
    </div>
  );
};

export default Products;
