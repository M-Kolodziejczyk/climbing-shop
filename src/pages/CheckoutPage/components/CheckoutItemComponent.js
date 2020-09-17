import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import discountPrice from "../../../helpers/discountPrice";
import totalPrice from "../../../helpers/totalPrice";

import { Grid, Typography, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    borderBottom: "1px solid #e6e6e6",
    paddingBottom: "10px",
    paddingTop: "10px",
    position: "relative",
    margin: "0px"
  },
  img: {
    minHeight: "100px",
    maxHeight: "100px",
    objectFit: "scale-down"
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  productName: {
    color: "#212529",
    fontSize: "18px"
  },
  manufacturer: {
    color: "#212529",
    fontSize: "20px",
    fontWeight: "500"
  },
  price: {
    color: "#f32836",
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "center"
  },
  oldPrice: {
    textDecoration: "line-through",
    fontWeight: "500",
    textAlign: "center"
  },
  total: {
    padding: "8px",
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "center"
  }
}));

const CheckoutItemComponent = ({ product }) => {
  const classes = useStyles();
  const total = totalPrice(product.price, product.discount, product.amount);
  let discPrice;

  if (product.discount !== "0") {
    discPrice = discountPrice(product.price, product.discount);
  }

  return (
    <Grid
      item
      container
      xs={12}
      spacing={2}
      className={classes.container}
      alignItems="center"
    >
      <Grid item xs={6} md={2}>
        <Link to="/">
          <CardMedia
            className={classes.img}
            component="img"
            src={`https://climbing-shop.s3-eu-west-1.amazonaws.com/public/product-image/${product.productId}/1.jpg`}
          />
        </Link>
      </Grid>
      <Grid item xs={6} md={4}>
        <Link to="/" className={classes.link}>
          <Typography className={classes.manufacturer}>
            {product.manufacturer}
          </Typography>
          <Typography className={classes.productName}>
            {product.productName}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={6} md={2}>
        {product.discount === "0" ? (
          <Typography className={classes.price}>{product.price} zl</Typography>
        ) : (
          <Fragment>
            <Typography className={classes.price}>{discPrice} zl</Typography>
            <Typography className={classes.oldPrice}>
              {product.price} zl
            </Typography>
          </Fragment>
        )}
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography className={classes.total}>{product.amount}</Typography>
      </Grid>
      <Grid item xs={6} md={2}>
        <Typography className={classes.total}>{total} zl</Typography>
      </Grid>
    </Grid>
  );
};

export default CheckoutItemComponent;
