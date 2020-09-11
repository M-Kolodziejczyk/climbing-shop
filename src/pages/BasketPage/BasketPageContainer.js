import React, { Fragment } from "react";
import BasketPageComponent from "./components/BasketPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";

const BasketPageContainer = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      <BasketPageComponent />
      <Footer />
    </Fragment>
  );
};

export default BasketPageContainer;
