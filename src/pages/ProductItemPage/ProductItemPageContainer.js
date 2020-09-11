import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, setLoading } from "../../state/product/productAction";
import useBasket from "../../customHooks/useBasket";
import ProductItemPageComponent from "./components/ProductItemPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";

const ProductItemPageContainer = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const product = useSelector(state => state.product.product);
  const user = useSelector(state => state.auth.user);
  const basket = useSelector(state => state.product.basket);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getProduct(props.match.params.id));
    // eslint-disable-next-line
  }, [props.match.params.id]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [user]);

  const { amountChange, handleSubmit, values, errors, amount } = useBasket(
    basket,
    product,
    email
  );

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      {product && (
        <ProductItemPageComponent
          product={product}
          amountChange={amountChange}
          amount={amount}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
      <Footer />
    </Fragment>
  );
};

export default ProductItemPageContainer;
