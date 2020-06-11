import React from "react";

const ProductBox = () => {
  const productBox = {
    flex: "0 0 24%",
    boxShadow: "0 0 12px #aaa",
    marginBottom: "40px",
    transition: "box-shadow .3s ease-in-out",
    position: "relative"
  };

  const productLabel = {
    backgroundColor: "#f32836",
    color: "white",
    fontWeight: "700",
    padding: "7px",
    position: "absolute",
    top: "0",
    right: "0"
  };

  const image = {
    maxWidth: "100%"
  };

  const productManufacturer = {
    fontSize: "14px",
    margin: "10px 0"
  };

  const productName = {
    fontSize: "16px",
    lineHeight: "16px",
    marginBottom: "10px"
  };

  const productPrice = {
    display: "flex",
    alignItems: "baseline",
    marginBottom: "10px"
  };

  const currentPrice = {
    color: "#f32836",
    fontWeight: "500",
    fontSize: "21px"
  };

  const oldPrice = {
    fontSize: "16px",
    marginLeft: "20px",
    textDecoration: "line-through"
  };

  return (
    <div style={productBox} className="product-box">
      <div className="product-box-wrapper">
        <div style={productLabel} className="product-label">
          <span className="text-uppercase">-20%</span>
        </div>
        <div className="product_img mt-4">
          <img
            style={image}
            src="https://climbing-shop.s3-eu-west-1.amazonaws.com/black_diamond_helmet.jpg"
            alt=""
          />
        </div>
        <div className="produt_content p-3">
          <div style={productManufacturer} className="product_manufacturer">
            <span className="text-uppercase">Black Diamond</span>
          </div>
          <div style={productName} className="product_name">
            <span className="text-uppercase">
              <strong>KASK WSPINACZKOWY BLACK DIAMOND HALF DOME - SLATE</strong>
            </span>
          </div>
          <div style={productPrice} className="product_price">
            <span style={currentPrice} className="">
              210zł
            </span>
            <span style={oldPrice} className="text-uppercase">
              240zł
            </span>
          </div>
          <div>
            <a href="#" className="text-uppercase btn btn-dark">
              BUY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
