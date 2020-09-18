import React, { useState, useEffect, useRef } from "react";
import CheckoutItemComponent from "./CheckoutItemComponent";
import basketTotalPrice from "../../../helpers/basketTotalPrice";
import { makeStyles } from "@material-ui/core/styles";
import useCheckout from "../../../customHooks/useCheckout";
import {
  Grid,
  Container,
  Typography,
  Button,
  TextField,
  ListItemText
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
    color: "#f32836",
    marginTop: "20px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0",
      textAlign: "right"
    }
  },

  deliveryContainer: {
    minHeight: "410px"
  },
  deliveryHeader: {
    marginBottom: "20px"
  },
  saveBtn: {
    marginLeft: "40px",
    backgroundColor: "#f32836",
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  editBtn: {
    backgroundColor: "#f32836",
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  },
  orderBtn: {
    marginTop: "10px",
    marginBottom: "20px",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e40606"
    }
  }
}));

const CheckoutPageComponent = ({ basket, user }) => {
  const classes = useStyles();
  const [address, setAddress] = useState({});
  const [editAddress, setEditAddress] = useState(false);
  const [newAddress, setNewAddress] = useState(false);
  const [submitAddress, setSubmitAddress] = useState(false);
  const formRef = useRef(null);
  const toggleBtnFormRef = useRef(null);

  const initialAddress = {
    firstName: "",
    lastName: "",
    address: "",
    zipCode: "",
    city: "",
    phone: ""
  };

  const totalPrice = basketTotalPrice(basket);

  useEffect(() => {
    setAddress({
      firstName: user["custom:firstName"],
      lastName: user["custom:lastName"],
      address: user["custom:address"],
      zipCode: user["custom:zipCode"],
      city: user["custom:city"],
      phone: user["custom:phone"]
    });
    // eslint-disable-next-line
  }, []);

  const {
    handleAddressSubmit,
    handleChange,
    handleSubmit,
    values,
    errors
  } = useCheckout(user, basket, totalPrice);

  useEffect(() => {
    if (Object.keys(address).length > 0) {
      handleChange(address);
    }
    // eslint-disable-next-line
  }, [address]);

  const toggleForm = e => {
    if (formRef.current.hidden) {
      setEditAddress(true);
      formRef.current.removeAttribute("hidden");
      toggleBtnFormRef.current.innerText = "CANCEL";
      if (!newAddress) {
        handleChange(initialAddress);
      }
      setSubmitAddress(false);
    } else {
      setEditAddress(false);
      formRef.current.setAttribute("hidden", true);
      toggleBtnFormRef.current.innerText = "EDIT Address";
      handleChange(address);
    }
  };

  const saveAddress = e => {
    handleAddressSubmit();
    setSubmitAddress(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitAddress) {
      setNewAddress(true);
      if (!formRef.current.hidden) {
        setEditAddress(false);
        formRef.current.setAttribute("hidden", true);
        toggleBtnFormRef.current.innerText = "EDIT";
      }
    }

    // eslint-disable-next-line
  }, [submitAddress]);

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
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">Summary:</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.totalPrice}>
              {totalPrice} zł
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.deliveryHeader}>
          <Typography variant="h3">Delivery Address:</Typography>
        </Grid>
        <Grid item container xs={12} className={classes.deliveryContainer}>
          {!newAddress ? (
            <Grid item xs={12} md={6}>
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
          ) : (
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h4">
                {values.firstName}
              </Typography>
              <Typography gutterBottom variant="h4">
                {values.lastName}
              </Typography>
              <Typography gutterBottom variant="h4">
                {values.address}
              </Typography>
              <Typography gutterBottom variant="h4">
                {values.zipCode} {values.city}
              </Typography>
              <Typography gutterBottom variant="h4">
                {values.phone}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <form noValidate ref={formRef} hidden={true}>
              <Grid container spacing={2} item xs={12}>
                <Grid item xs={12}>
                  <TextField
                    name="firstName"
                    value={values.firstName || ""}
                    error={errors.firstName ? true : false}
                    helperText={"" || errors.firstName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    id="firstName"
                    label="First Name"
                    autoFocus
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="lastName"
                    value={values.lastName || ""}
                    error={errors.lastName ? true : false}
                    helperText={"" || errors.lastName}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    id="lastName"
                    label="Last Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="address"
                    value={values.address || ""}
                    error={errors.address ? true : false}
                    helperText={"" || errors.address}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    id="address"
                    label="Address"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    name="city"
                    value={values.city || ""}
                    error={errors.city ? true : false}
                    helperText={"" || errors.city}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    id="city"
                    label="City"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    name="zipCode"
                    value={values.zipCode || ""}
                    error={errors.zipCode ? true : false}
                    helperText={"" || errors.zipCode}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    id="zipCode"
                    label="Zip Code"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="phone"
                    value={values.phone || ""}
                    error={errors.phone ? true : false}
                    helperText={"" || errors.phone}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    id="phone"
                    label="Phone"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </form>
            <Button
              className={classes.editBtn}
              variant="contained"
              onClick={toggleForm}
            >
              <ListItemText ref={toggleBtnFormRef}>Edit Address</ListItemText>
            </Button>
            {editAddress && (
              <Button
                className={classes.saveBtn}
                variant="contained"
                onClick={saveAddress}
              >
                <ListItemText>Save</ListItemText>
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            className={classes.orderBtn}
            onClick={() => handleSubmit()}
          >
            Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPageComponent;
