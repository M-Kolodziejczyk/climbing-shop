import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import { useSelector } from "react-redux";
import { forgotPassword } from "../../state/auth/authActions";
import { EmailValidation } from "../../validators/ForgotPasswordValidationRules";
import useForm from "../../customHooks/useForm";
import Spinner from "../../common/components/Spinner";
import Header from "../../common/containers/HeaderContainer";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";

const ForgotPasswordContainer = props => {
  const loading = useSelector(state => state.auth.loading);
  const authError = useSelector(state => state.auth.authError);
  let history = useHistory();
  const forgotPasswordSuccess = useSelector(
    state => state.auth.forgotPasswordSuccess
  );
  const initialState = {
    email: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    EmailValidation,
    forgotPassword
  );

  useEffect(() => {
    if (!loading && forgotPasswordSuccess) {
      history.push("/forgot-password-email");
    }
  }, [loading, forgotPasswordSuccess, history]);

  return (
    <Fragment>
      {loading && <Spinner />}
      <Header />
      <Navbar />
      <ForgotPasswordComponent
        onChange={handleChange}
        formData={values}
        onSubmit={handleSubmit}
        errors={errors}
        authError={authError}
      />
      <Footer />
    </Fragment>
  );
};

export default ForgotPasswordContainer;
