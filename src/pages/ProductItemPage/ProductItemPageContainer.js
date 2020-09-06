import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, setLoading } from "../../state/product/productAction";
import ProductItemPageComponent from "./components/ProductItemPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";

const ProductItemPageContainer = props => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.product);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getProduct(props.match.params.id));
    // eslint-disable-next-line
  }, [props.match.params.id]);

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      {product && <ProductItemPageComponent product={product} />}
      <Footer />
    </Fragment>
  );
};

export default ProductItemPageContainer;
