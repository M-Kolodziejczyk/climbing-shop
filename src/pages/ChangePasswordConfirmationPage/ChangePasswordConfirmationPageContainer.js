import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ChangePasswordConfirmationPageComponent from "./components/ChangePasswordConfirmationPageComponent";

const ChangePasswordConfirmationPageContainer = () => {
  let history = useHistory();
  const changePassword = useSelector(state => state.auth.changePassword);

  if (!changePassword) {
    history.push("/");
  }
  return <ChangePasswordConfirmationPageComponent />;
};

export default ChangePasswordConfirmationPageContainer;
