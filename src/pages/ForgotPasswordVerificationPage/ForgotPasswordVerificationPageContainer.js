import React, { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { forgotPasswordVerification } from "../../state/auth/authActions";
import { PasswordValidation } from "../../validators/ForgotPasswordValidationRules";
import useForm from "../../customHooks/useForm";
import ForgotPasswordVerificationPageComponent from "./components/ForgotPasswordVerificationPageComponent";
import Spinner from "../../common/components/Spinner";

const ForgotPasswordVerificationPageContainer = props => {
  const { email, code } = props.match.params;
  let history = useHistory();
  const authError = useSelector(state => state.auth.authError);
  const loading = useSelector(state => state.auth.loading);
  const changePassword = useSelector(state => state.auth.changePassword);

  const initialState = {
    email: email,
    verificationCode: code,
    password: "",
    password2: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    PasswordValidation,
    forgotPasswordVerification
  );

  useEffect(() => {
    if (!loading && changePassword) {
      history.push("/change-password-confirm");
    }
  }, [loading, changePassword, history]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <ForgotPasswordVerificationPageComponent
          onChange={handleChange}
          formData={values}
          onSubmit={handleSubmit}
          errors={errors}
          authError={authError}
          loading={loading}
        />
      )}
    </Fragment>
  );
};

export default ForgotPasswordVerificationPageContainer;
