import React from "react";
import ProductBox from "./ProductBox";

const Products = () => {
  return (
    <div className="container">
      <div className="col-12">
        <h1>Climbing Products</h1>
        <div className="mt-2 d-flex flex-wrap flex-row justify-content-between">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </div>
  );
};

export default Products;
