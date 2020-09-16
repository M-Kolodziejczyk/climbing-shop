import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import CheckoutPageComponent from "./components/CheckoutPageComponent";
import useCheckBasketPrice from "../../customHooks/useCheckBasketPrice";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";
import Spinner from "../../common/components/Spinner";

const CheckoutPageContainer = () => {
  let location = useLocation();
  let history = useHistory();
  const user = useSelector(state => state.auth.user);
  const basket = location.state;
  const values = useCheckBasketPrice(basket, user.email);

  if (!basket) {
    history.push("/");
  }

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      {Object.keys(values).length > 0 ? (
        <CheckoutPageComponent basket={values} user={user} />
      ) : (
        <div className="beforeFooterHigh">
          <Spinner />
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default CheckoutPageContainer;
