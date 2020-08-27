import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  productBox: {
    flex: "0 0 24%",
    boxShadow: "0 0 12px #aaa",
    marginBottom: "40px",
    transition: "box-shadow .3s ease-in-out",
    position: "relative",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.8)"
    }
  },

  label: {
    backgroundColor: "#f32836",
    color: "white",
    fontWeight: "700",
    padding: "7px",
    position: "absolute",
    top: "0",
    right: "0"
  },
  productManufacturer: {
    fontSize: "14px",
    margin: "10px 0",
    textTransform: "uppercase"
  },
  productName: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "16px",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0"
  },
  currentPrice: {
    color: "#f32836",
    fontWeight: "500",
    fontSize: "21px"
  },
  oldPrice: {
    fontSize: "16px",
    textDecoration: "line-through"
  },
  buttonContainer: {
    padding: "0 16px 16px 16px"
  },
  button: {
    color: "white",
    backgroundColor: "#f32836"
  },
  img: {
    minHeight: "240px",
    maxHeight: "240px",
    objectFit: "scale-down"
  }
}));

const ProductItem = ({ product }) => {
  const classes = useStyles();

  return (
    <a href={`/products/${product.id}`} className={classes.productBox}>
      <Card>
        <CardContent>
          {product.discount !== "0" ? (
            <Typography className={classes.label}>
              -{product.discount}%
            </Typography>
          ) : (
            <Typography />
          )}
        </CardContent>

        <CardMedia
          className={classes.img}
          component="img"
          src={`https://climbing-shop.s3-eu-west-1.amazonaws.com/public/product-image/${product.id}/1.jpg`}
        />
        <CardContent>
          <Typography className={classes.productManufacturer}>
            {product.manufacturer}
          </Typography>
          <Typography className={classes.productName}>
            {product.productName}
          </Typography>
          <Grid container direction="row" alignItems="center">
            {product.discount === "0" ? (
              <Grid item container xs={4}>
                <Typography className={classes.currentPrice}>
                  {product.price} zł
                </Typography>
              </Grid>
            ) : (
              <Fragment>
                <Grid item container xs={4}>
                  <Typography className={classes.currentPrice}>
                    {product.price * (1 - product.discount / 100)} zł
                  </Typography>
                </Grid>
                <Grid item container xs={4}>
                  <Typography className={classes.oldPrice}>
                    {product.price} zł
                  </Typography>
                </Grid>
              </Fragment>
            )}
            <Grid item container xs={4}></Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.buttonContainer}>
          <Button className={classes.button}>BUY</Button>
        </CardActions>
      </Card>
    </a>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
