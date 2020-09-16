import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, setLoading } from "../../state/product/productAction";
import useBasket from "../../customHooks/useBasket";
import ProductItemPageComponent from "./components/ProductItemPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";
import Spinner from "../../common/components/Spinner";

const ProductItemPageContainer = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const user = useSelector(state => state.auth.user);
  const userGroups = useSelector(state => state.auth.userGroups);
  const product = useSelector(state => state.product.product);
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

  // eslint-disable-next-line
  const { amountChange, handleSubmit, values, errors, amount } = useBasket(
    basket,
    product,
    email
  );

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      {product && product.id === props.match.params.id ? (
        <ProductItemPageComponent
          product={product}
          amountChange={amountChange}
          amount={amount}
          handleSubmit={handleSubmit}
          errors={errors}
          userGroups={userGroups}
        />
      ) : (
        <div className="beforeFooterHigh">
          <Spinner />
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default ProductItemPageContainer;
