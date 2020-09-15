import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanForgotPassword } from "../../state/auth/authActions";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container } from "@material-ui/core";
import HeaderContainer from "../../common/containers/HeaderContainer";
import Footer from "../../common/components/Footer";
import Navbar from "../../common/components/Navbar";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column"
  }
}));

const ForgotPasswordConfirmationPageContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanForgotPassword);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      <Container component="main" maxWidth="sm" className="beforeFooter">
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            Reset password link has been sent
          </Typography>
          <Typography component="h2" variant="h5">
            Please check your email and follow the instruction.
          </Typography>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ForgotPasswordConfirmationPageContainer;
