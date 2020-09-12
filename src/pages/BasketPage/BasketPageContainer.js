import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import BasketPageComponent from "./components/BasketPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";

const BasketPageContainer = () => {
  const basket = useSelector(state => state.product.basket);

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      <BasketPageComponent basket={basket} />
      <Footer />
    </Fragment>
  );
};

export default BasketPageContainer;
