import React, { useState, useEffect } from "react";
import CheckoutItemComponent from "./CheckoutItemComponent";
import basketTotalPrice from "../../../helpers/basketTotalPrice";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Container,
  Typography,
  Button,
  TextField
} from "@material-ui/core";

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
    textAlign: "center",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  totalPrice: {
    color: "#f32836"
  },

  deliveryContainer: {
    marginTop: "50px"
  },
  deliveryHeader: {
    marginBottom: "20px"
  }
}));

const CheckoutPageComponent = ({ basket, user }) => {
  const classes = useStyles();
  const [address, setAddress] = useState({});

  const totalPrice = basketTotalPrice(basket);

  useEffect(() => {
    setAddress({
      firstName: basket["custom:firstName"],
      lastName: basket["custom:lastName"],
      address: basket["custom:address"],
      zipCode: basket["custom:zipCode"],
      city: basket["custom:city"],
      phone: basket["custom:phone"]
    });
  }, []);

  console.log(address);

  return (
    <Container className="beforeFooter">
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Checkout</Typography>
        </Grid>
        <Grid item container xs={12} className={classes.basketHeader}>
          <Grid item xs={6}>
            <Typography variant="h5">Products:</Typography>
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
        <Grid item container xs={12}>
          {Object.keys(basket).map(key => (
            <CheckoutItemComponent product={basket[key]} key={key} />
          ))}
        </Grid>
        <Grid item container xs={12} className={classes.total}>
          <Grid item xs={10}>
            <Typography variant="h4">Summary:</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant="h4"
              align="center"
              className={classes.totalPrice}
            >
              {totalPrice} zł
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} className={classes.deliveryContainer}>
          <Grid item xs={12} className={classes.deliveryHeader}>
            <Typography variant="h3">Delivery Address:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom variant="h4">
              {user["custom:firstName"]}
            </Typography>
            <Typography gutterBottom variant="h4">
              {user["custom:lastName"]}
            </Typography>
            <Typography gutterBottom variant="h4">
              {user["custom:address"]}
            </Typography>
            <Typography gutterBottom variant="h4">
              {user["custom:zipCode"]} {user["custom:city"]}
            </Typography>
            <Typography gutterBottom variant="h4">
              {user["custom:phone"]}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {/* <Grid item xs={6}>
              <TextField
                name="custom:firstName"
                value={values["custom:firstName"]}
                error={errors["custom:firstName"] ? true : false}
                helperText={"" || errors["custom:firstName"]}
                onChange={handleChange}
                variant="outlined"
                required
                id="firstName"
                label="First Name"
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="custom:address"
                value={values["custom:address"]}
                error={errors["custom:address"] ? true : false}
                helperText={"" || errors["custom:address"]}
                onChange={handleChange}
                variant="outlined"
                required
                id="address"
                label="Address"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="custom:lastName"
                value={values["custom:lastName"]}
                error={errors["custom:lastName"] ? true : false}
                helperText={"" || errors["custom:lastName"]}
                onChange={handleChange}
                variant="outlined"
                required
                id="lastName"
                label="Last Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="custom:zipCode"
                value={values["custom:zipCode"]}
                error={errors["custom:zipCode"] ? true : false}
                helperText={"" || errors["custom:zipCode"]}
                onChange={handleChange}
                variant="outlined"
                required
                id="zipCode"
                label="Zip Code"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="custom:phone"
                value={values["custom:phone"]}
                error={errors["custom:phone"] ? true : false}
                helperText={"" || errors["custom:phone"]}
                onChange={handleChange}
                variant="outlined"
                required
                id="phone"
                label="Phone"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="custom:city"
                value={values["custom:city"]}
                error={errors["custom:city"] ? true : false}
                helperText={"" || errors["custom:city"]}
                onChange={handleChange}
                variant="outlined"
                required
                id="city"
                label="City"
                fullWidth
              />
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPageComponent;
