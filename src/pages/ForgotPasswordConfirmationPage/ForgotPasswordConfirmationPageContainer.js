import React, { Fragment } from "react";
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

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      <Container component="main" maxWidth="sm">
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
