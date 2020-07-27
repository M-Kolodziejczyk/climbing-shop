import React, { Fragment, useEffect } from "react";
import ForgotPasswordComponent from "./components/ForgotPasswordComponent";
import { useSelector } from "react-redux";
import { forgotPassword } from "../../state/auth/authActions";
import validate from "../../validators/ForgotPasswordValidationRules";
import useForm from "../../customHooks/useForm";
import Spinner from "../../common/components/Spinner";

const ForgotPasswordContainer = props => {
  const loading = useSelector(state => state.auth.loading);
  const authError = useSelector(state => state.auth.authError);
  const forgotPasswordSuccess = useSelector(
    state => state.auth.forgotPasswordSuccess
  );
  const initialState = {
    email: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    validate,
    forgotPassword
  );

  useEffect(() => {
    if (!loading && forgotPasswordSuccess) {
      // push to forgot-password-confirmation page
      // props.history.push('')
    }
  }, [loading, forgotPasswordSuccess]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <ForgotPasswordComponent
          onChange={handleChange}
          formData={values}
          onSubmit={handleSubmit}
          errors={errors}
          authError={authError}
        />
      )}
    </Fragment>
  );
};

export default ForgotPasswordContainer;
