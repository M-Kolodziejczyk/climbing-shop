import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage/HomePageContainer";
import About from "./pages/AboutPage/AboutPageContainer";
import Products from "./pages/ProductsListPage/ProductListPageContainer";
import SignUp from "./pages/SignUpPage/SignUpPageContainer";
import SignIn from "./pages/SignInPage/SignInPageContainer";
import ForgotPassword from "./pages/ForgotPasswordPage/ForgotPasswordContainer";
import WelcomePageContainer from "./pages/WelcomePage/WelcomePageContainer";
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
      </Switch>
    </Router>
  );
};

export default App;
