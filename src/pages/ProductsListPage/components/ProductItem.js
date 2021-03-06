import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import discountPrice from "../../../helpers/discountPrice";
import { Link } from "react-router-dom";
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
    marginBottom: "40px",
    textDecoration: "none",
    maxWidth: "480px",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start"
    },
    "&:hover": {
      textDecoration: "none"
    }
  },

  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },

  card: {
    transition: "box-shadow .3s ease-in-out",
    boxShadow: "0 0 12px #aaa",
    position: "relative",
    "&:hover": {
      boxShadow: "0 0 12px 0 rgba(0, 0, 0, 0.8)"
    }
  },

  cardContent: {
    paddingTop: "25px"
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
    marginLeft: "10px",
    fontSize: "16px",
    textDecoration: "line-through"
  },
  buttonContainer: {
    padding: "0 16px 16px 16px"
  },
  button: {
    color: "!important white",
    backgroundColor: "#f32836"
  },
  formBtn: {
    color: "#ffffff",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e10d1b"
    }
  },
  img: {
    minHeight: "240px",
    maxHeight: "240px",
    objectFit: "scale-down"
  }
}));

const ProductItem = ({ product }) => {
  const classes = useStyles();
  const discPrice = discountPrice(product.price, product.discount);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.productBox}>
      <Link to={`/products/${product.id}`} className={classes.link}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
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
                <Grid item container xs={12}>
                  <Typography className={classes.currentPrice}>
                    {product.price} zł
                  </Typography>
                </Grid>
              ) : (
                <Fragment>
                  <Grid item container xs={12} alignItems="baseline">
                    <Typography className={classes.currentPrice}>
                      {discPrice} zł
                    </Typography>
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
            <Button
              variant="contained"
              size="medium"
              className={classes.formBtn}
            >
              Buy
            </Button>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
