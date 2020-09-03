import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useProductForm from "../../customHooks/useProductForm";
import EditProductPageComponent from "./components/EditProductPageComponent";
import Spinner from "../../common/components/Spinner";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";
import { updateProduct, getProduct } from "../../state/product/productAction";
import validate from "../../validators/AddProductValidationRules";

const EditProductPageContainer = props => {
  const dispatch = useDispatch();
  const productError = useSelector(state => state.product.productError);
  const loading = useSelector(state => state.product.loading);
  const formLoading = useSelector(state => state.product.formLoading);
  const product = useSelector(state => state.product.product);

  useEffect(() => {
    dispatch(getProduct(props.match.params.id));
    // eslint-disable-next-line
  }, []);

  const initialState = {
    id: "",
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
  } = useProductForm(initialState, validate, updateProduct);

  useEffect(() => {
    if (product) {
      handleChange({ name: "product", value: product });
    }
    // eslint-disable-next-line
  }, [product]);

  if (loading || formLoading || values.id === "") {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <HeaderContainer />
        <Navbar />
        <EditProductPageComponent
          formData={values}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          handleImage={handleImage}
          productError={productError}
          loading={loading}
        />
        <Footer />
      </Fragment>
    );
  }
};

export default EditProductPageContainer;
