import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SignInPageComponent from "./components/SignInPageComponent";
import { loginUser } from "../../state/auth/authActions";
import validate from "../../validators/SignInFormValidationRules";
import useForm from "../../customHooks/useForm";

const SignInPageContainer = props => {
  const authError = useSelector(state => state.auth.authError);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);

  const initialState = {
    email: "",
    password: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    validate,
    loginUser
  );

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated, props.history]);

  return (
    <SignInPageComponent
      onChange={handleChange}
      formData={values}
      onSubmit={handleSubmit}
      errors={errors}
      authError={authError}
      loading={loading}
    />
  );
};

export default SignInPageContainer;
