import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import HeaderContainer from "../../common/containers/HeaderContainer";
import { Typography, Container } from "@material-ui/core";
import Navbar from "../../common/components/Navbar";
import Footer from "../../common/components/Footer";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8)
  }
}));

const CompleteOrderContainer = () => {
  const classes = useStyles();
  let history = useHistory();
  const user = useSelector(state => state.auth.user);
  const orderSuccess = useSelector(state => state.product.orderSuccess);

  if (!orderSuccess) {
    history.push("/");
  }

  return (
    <Fragment>
      <HeaderContainer />
      <Navbar />
      <Container component="main" maxWidth="md" className="beforeFooter">
        <div className={classes.paper}>
          <Typography component="h1" variant="h4">
            {user["custom:firstName"]}
          </Typography>
          <Typography component="h2" variant="h5">
            Your order has been placed, please check your email and follow the
            instrucion.
          </Typography>
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default CompleteOrderContainer;
