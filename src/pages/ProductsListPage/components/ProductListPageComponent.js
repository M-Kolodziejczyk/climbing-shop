import React from "react";

const ProductListPageComponent = props => {
  return (
    <div className="container">
      <div className="col-12">
        <h1>Climbing Products</h1>
        <div className="mt-2 d-flex flex-wrap flex-row justify-content-between">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default ProductListPageComponent;
