import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import SignUpPageComponent from "./components/SignUpPageComponent";
import { registerUser } from "../../state/auth/authActions";
import validate from "../../validators/SignUpFormValidationRules";
import useForm from "../../customHooks/useForm";
import Header from "../../common/containers/HeaderContainer";
import Footer from "../../common/components/Footer";
import Navbar from "../../common/components/Navbar";

const SignUpPageContainer = props => {
  const authError = useSelector(state => state.auth.authError);
  const isRegister = useSelector(state => state.auth.isRegister);
  const loading = useSelector(state => state.auth.loading);

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

  useEffect(() => {
    if (isRegister) {
      props.history.push("/welcome");
    }
  }, [isRegister, props.history]);

  return (
    <Fragment>
      <Header />
      <Navbar />
      <SignUpPageComponent
        onChange={handleChange}
        formData={values}
        onSubmit={handleSubmit}
        errors={errors}
        authError={authError}
        loading={loading}
      />
      <Footer />
    </Fragment>
  );
};
export default SignUpPageContainer;
