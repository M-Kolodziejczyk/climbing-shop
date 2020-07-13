import React from "react";
import Header from "../components/Header";
import { userLogout } from "../../state/auth/authActions";
import { useSelector, useDispatch } from "react-redux";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(userLogout());
  };
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  return (
    <Header user={user} isAuthenticated={isAuthenticated} signOut={signOut} />
  );
};

export default HeaderContainer;
