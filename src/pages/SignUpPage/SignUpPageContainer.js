import React from "react";
import { useSelector } from "react-redux";
import SignUpPageComponent from "./components/SignUpPageComponent";
import { registerUser } from "../../state/auth/authActions";
import validate from "../../validators/SignUpFormValidationRules";
import useForm from "../../customHooks/useForm";

const SignUpPageContainer = () => {
  const authError = useSelector(state => state.auth.authError);

  const initailState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initailState,
    validate,
    registerUser
  );

  return (
    <SignUpPageComponent
      onChange={handleChange}
      formData={values}
      onSubmit={handleSubmit}
      errors={errors}
      authError={authError}
    />
  );
};
export default SignUpPageContainer;
