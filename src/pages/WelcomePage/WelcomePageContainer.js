import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import WelcomePageComponent from "./components/WelcomePageComponent";
import Header from "../../common/containers/HeaderContainer";
import Footer from "../../common/components/Footer";
import Navbar from "../../common/components/Navbar";

const WelcomePageContainer = () => {
  let history = useHistory();
  const registerName = useSelector(state => state.auth.registerName);
  const isRegister = useSelector(state => state.auth.isRegister);
  const loading = useSelector(state => state.auth.loading);

  if (!isRegister) {
    history.push("/");
  }

  return (
    <Fragment>
      <Header />
      <Navbar />
      <WelcomePageComponent name={registerName} loasing={loading} />
      <Footer />
    </Fragment>
  );
};

export default WelcomePageContainer;
