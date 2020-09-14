import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import SignInPageComponent from "./components/SignInPageComponent";
import { loginUser, googleLogin } from "../../state/auth/authActions";
import validate from "../../validators/SignInFormValidationRules";
import useForm from "../../customHooks/useForm";
import Header from "../../common/containers/HeaderContainer";
import Footer from "../../common/components/Footer";
import Navbar from "../../common/components/Navbar";

const SignInPageContainer = props => {
  const authError = useSelector(state => state.auth.authError);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

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

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  return (
    <Fragment>
      <Header />
      <Navbar />
      <SignInPageComponent
        onChange={handleChange}
        formData={values}
        onSubmit={handleSubmit}
        errors={errors}
        authError={authError}
        loading={loading}
        googleLogin={handleGoogleLogin}
      />
      <Footer />
    </Fragment>
  );
};

export default SignInPageContainer;
