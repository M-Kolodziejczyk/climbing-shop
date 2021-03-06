import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import BasketItemComponent from "./BasketItemComponent";
import basketTotalPrice from "../../../helpers/basketTotalPrice";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "30px",
    marginBottom: "50px"
  },
  basketHeader: {
    marginTop: "20px",
    borderBottom: "2px solid #000000"
  },

  basketHeaderItem: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  basketBody: {
    marginTop: "5px"
  },
  summaryContainer: {
    margin: "60px 10px 0px",
    width: "100%",
    border: "2px solid #e6e6e6",
    borderRadius: "5px",
    padding: "30px 30px"
  },
  summaryHeader: {
    borderBottom: "1px solid #e6e6e6",
    paddingBottom: "10px"
  },
  subTotal: {
    marginTop: "30px",
    borderBottom: "1px solid #e6e6e6",
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "space-between"
  },
  subtotalSpan: {},
  total: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
    fontSize: "24px"
  },
  totalSpan: {
    fontSize: "24px"
  },
  checkoutContainer: {
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto"
    }
  },
  checkoutLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  checkoutBtn: {
    marginTop: "10px",
    width: "100%",
    color: "#ffffff",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e10d1b"
    }
  }
}));

const BasketPageComponent = ({ basket }) => {
  const classes = useStyles();

  let totalPrice = 0;

  if (basket !== null) {
    totalPrice = basketTotalPrice(basket);
  }

  return (
    <Container className="beforeFooter">
      <Grid container className={classes.container} spacing={2}>
        <Grid item container xs={12} lg={8}>
          <Grid item xs={12}>
            <Typography variant="h4">Your basket:</Typography>
          </Grid>
          <Grid item container xs={12} className={classes.basketHeader}>
            <Grid item xs={6}>
              <Typography variant="h5">Product:</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5" className={classes.basketHeaderItem}>
                Price:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5" className={classes.basketHeaderItem}>
                Amount:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5" className={classes.basketHeaderItem}>
                Total:
              </Typography>
            </Grid>
          </Grid>
          {basket === null || basket === "" ? (
            <h1>Empty basket</h1>
          ) : (
            <Fragment>
              {Object.keys(basket).map(key => (
                <BasketItemComponent
                  key={key}
                  product={basket[key]}
                  basket={basket}
                  id={key}
                />
              ))}
            </Fragment>
          )}
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={8}
          md={6}
          lg={4}
          alignContent="flex-start"
          className={classes.checkoutContainer}
        >
          <div className={classes.summaryContainer}>
            <Typography variant="h5" className={classes.summaryHeader}>
              Summary:
            </Typography>
            {/* <Typography variant="h6" className={classes.subTotal}>
              Subtotal: <span className={classes.subtotalSpan}>500 zl</span>
            </Typography> */}
            <Typography variant="h6" className={classes.total}>
              Total: <span className={classes.totalSpan}>{totalPrice} zl</span>
            </Typography>
            <Link
              to={{
                pathname: "/user/checkout",
                state: basket
              }}
              className={classes.checkoutLink}
            >
              <Button
                type="submit"
                variant="contained"
                size="large"
                className={classes.checkoutBtn}
              >
                Checkout
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasketPageComponent;
