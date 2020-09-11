import React, { Fragment } from "react";
import discountPrice from "../../../helpers/discountPrice";
import BasketItemComponent from "./BasketItemComponent";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "30px",
    marginBottom: "50px"
  },
  basketHeader: {
    marginTop: "20px",
    borderBottom: "2px solid #000000"
  },
  basketBody: {
    marginTop: "5px"
  }
}));

const BasketPageComponent = ({ basket }) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.container} spacing={2}>
        <Grid item container xs={8}>
          <Grid item xs={12}>
            <Typography variant="h4">Your basket:</Typography>
          </Grid>
          <Grid item container xs={12} className={classes.basketHeader}>
            <Grid item xs={6}>
              <Typography variant="h5">Product:</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5">Price:</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5">Amount:</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5">Total:</Typography>
            </Grid>
          </Grid>
          {basket === null || basket === "" ? (
            <h1>Empty basket</h1>
          ) : (
            <Fragment>
              {Object.keys(basket).map(key => (
                <BasketItemComponent key={key} product={basket[key]} />
              ))}
            </Fragment>
          )}
        </Grid>
        <Grid item container xs={4}>
          <Typography>Summary</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasketPageComponent;
