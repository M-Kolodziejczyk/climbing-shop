import React from "react";
import WelcomePageComponent from "./components/WelcomePageComponent";
import { useSelector } from "react-redux";

const WelcomePageContainer = () => {
  const registerUser = useSelector(state => state.auth.registerUser);
  const loading = useSelector(state => state.auth.loading);
  return <WelcomePageComponent user={registerUser} loasing={loading} />;
};

export default WelcomePageContainer;
