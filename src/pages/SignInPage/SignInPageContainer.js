import React from "react";
import { useSelector } from "react-redux";
import SignInPageComponent from "./components/SignInPageComponent";
import { loginUser } from "../../state/auth/authActions";
import validate from "../../validators/SignInFormValidationRules";
import useForm from "../../customHooks/useForm";

const SignInPageContainer = () => {
  const authError = useSelector(state => state.auth.authError);

  const initialState = {
    email: "",
    password: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialState,
    validate,
    loginUser
  );

  return (
    <SignInPageComponent
      onChange={handleChange}
      formData={values}
      onSubmit={handleSubmit}
      errors={errors}
      authError={authError}
    />
  );
};

export default SignInPageContainer;
