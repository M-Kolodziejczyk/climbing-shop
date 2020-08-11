import React from "react";
import { useSelector } from "react-redux";
import ProductFormPageComponent from "./components/ProductFormPageComponent";
import { addProduct } from "../../state/product/productAction";
import validate from "../../validators/AddProductValidationRules";
import useForm from "../../customHooks/useForm";
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
    quantity: "",
    properties: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
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
