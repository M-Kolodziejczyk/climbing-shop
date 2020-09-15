import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductFormPageComponent from "./components/ProductFormPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";
import { addProduct } from "../../state/product/productAction";
import validate from "../../validators/AddProductValidationRules";
import useProductForm from "../../customHooks/useProductForm";
import { v4 } from "uuid";

const ProductFormPageContainer = () => {
  const productError = useSelector(state => state.product.productError);
  const formLoading = useSelector(state => state.product.FormLoading);
  const product = useSelector(state => state.product.product);
  const [isSuccess, setIsSuccess] = useState(false);

  const initialState = {
    id: v4(),
    productName: "",
    manufacturer: "",
    price: "",
    discount: "",
    description: "",
    longDescription: "",
    quantity: "",
    features: { 1: "" },
    properties: {
      1: {
        name: "",
        value: ""
      }
    },
    category: ""
  };

  const {
    handleChange,
    handleSubmit,
    handleImage,
    values,
    errors
  } = useProductForm(initialState, validate, addProduct);

  useEffect(() => {
    if (!formLoading && product) {
      setIsSuccess(true);
    }
  }, [product, formLoading]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      <ProductFormPageComponent
        onChange={handleChange}
        formData={values}
        onSubmit={handleSubmit}
        errors={errors}
        productError={productError}
        loading={formLoading}
        handleImage={handleImage}
        isSuccess={isSuccess}
      />
      <Footer />
    </Fragment>
  );
};

export default ProductFormPageContainer;
