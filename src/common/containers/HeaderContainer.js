import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const HeaderContainer = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  return <Header user={user} isAuthenticated={isAuthenticated} />;
};

export default HeaderContainer;
