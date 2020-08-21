import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage/HomePageContainer";
import About from "./pages/AboutPage/AboutPageContainer";
import Products from "./pages/ProductsListPage/ProductListPageContainer";
import SignUp from "./pages/SignUpPage/SignUpPageContainer";
import SignIn from "./pages/SignInPage/SignInPageContainer";
import ForgotPassword from "./pages/ForgotPasswordPage/ForgotPasswordContainer";
import WelcomePageContainer from "./pages/WelcomePage/WelcomePageContainer";
import AdminPageContainer from "./pages/AdminPage/AdminPageContainer";
// import ProductsPageContainer from "./pages/ProductsPage/ProductsPageContainer";
import ProductFormPageContainer from "./pages/ProductFormPage/ProductFormPageContainer";
import ForgotPasswordConfirmationPageContainer from "./pages/ForgotPasswordConfirmationPage/ForgotPasswordConfirmationPageContainer";
import ForgotPasswordVerificationPageContainer from "./pages/ForgotPasswordVerificationPage/ForgotPasswordVerificationPageContainer";
import ChangePasswordConfirmationPageComponent from "./pages/ChangePasswordConfirmationPage/ChangePasswordConfirmationPageContainer";
import WorkingPageContainer from "./pages/workingPage/WorkingPageContainer";
import NotFoundPageContainer from "./pages/NotFoundPage/NotFoundPageContainer";
import { loadUser } from "./state/auth/authActions";
import { useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.length > 0) {
      dispatch(loadUser());
    }
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/welcome" component={WelcomePageContainer} />
        <Route exact path="/admin" component={AdminPageContainer} />
        {/* <Route exact path="/products" component={ProductsPageContainer} /> */}
        <Route
          exact
          path="/forgot-password-email"
          component={ForgotPasswordConfirmationPageContainer}
        />
        <Route
          exact
          path="/forgot-password-verification/:email/:code"
          component={ForgotPasswordVerificationPageContainer}
        />
        <Route
          exact
          path="/change-password-confirm"
          component={ChangePasswordConfirmationPageComponent}
        />
        <Route exact path="/product/add" component={ProductFormPageContainer} />
        {/* <Route exact path="/working" component={WorkingPageContainer} /> */}
        <Route component={NotFoundPageContainer} />
      </Switch>
    </Router>
  );
};

export default App;
