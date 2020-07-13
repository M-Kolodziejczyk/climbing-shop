import React from "react";
import HeaderContainer from "../../../common/containers/HeaderContainer";
import Footer from "../../../common/components/Footer";
import Navbar from "../../../common/components/Navbar";
import Slider from "../../../common/components/Slider";

const HomePageComponent = () => {
  return (
    <div>
      <HeaderContainer />
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
};

export default HomePageComponent;
