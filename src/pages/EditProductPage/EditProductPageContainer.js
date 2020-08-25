import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditProductPageComponent from "./components/EditProductPageComponent";
import Spinner from "../../common/components/Spinner";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";
import { addProduct, getProduct } from "../../state/product/productAction";
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

  if (loading || formLoading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <HeaderContainer />
        <Navbar />
        <EditProductPageComponent
          product={product}
          validate={validate}
          callback={addProduct}
          productError={productError}
          loading={loading}
        />
        <Footer />
      </Fragment>
    );
  }
};

export default EditProductPageContainer;
