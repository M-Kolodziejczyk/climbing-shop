import React from "react";
import { useSelector } from "react-redux";
import ProductFormPageComponent from "./components/ProductFormPageComponent";
import { addProduct } from "../../state/product/productAction";
import validate from "../../validators/AddProductValidationRules";
import useProductForm from "../../customHooks/useProductForm";
import { v4 } from "uuid";

const ProductFormPageContainer = () => {
  const productError = useSelector(state => state.product.productError);
  const formLoading = useSelector(state => state.product.FormLoading);

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

  const { handleChange, handleSubmit, values, errors } = useProductForm(
    initialState,
    validate,
    addProduct
  );

  return (
    <div>
      <ProductFormPageComponent
        onChange={handleChange}
        formData={values}
        onSubmit={handleSubmit}
        errors={errors}
        productError={productError}
        loading={formLoading}
      />
    </div>
  );
};

export default ProductFormPageContainer;
