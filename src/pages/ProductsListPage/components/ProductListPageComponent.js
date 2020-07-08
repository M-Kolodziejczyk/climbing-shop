import React from "react";
import ProductItem from "./ProductItem";

const ProductListPageComponent = () => {
  return (
    <div className="container">
      <div className="col-12">
        <h1>Climbing Products</h1>
        <div className="mt-2 d-flex flex-wrap flex-row justify-content-between">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default ProductListPageComponent;
