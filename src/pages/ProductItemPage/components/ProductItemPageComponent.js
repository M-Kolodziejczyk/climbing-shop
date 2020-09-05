import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import discountPrice from "../../../helpers/discountPrice";

import {
  Grid,
  Container,
  Typography,
  Button,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "30px",
    marginBottom: "50px"
  },
  img: {
    minHeight: "240px",
    maxHeight: "240px",
    objectFit: "scale-down"
  },
  currentPrice: {
    color: "#f32836",
    fontWeight: "400"
  },
  oldPrice: {
    textDecoration: "line-through"
  },
  save: {
    color: "#ff0000"
  },
  formContainer: {
    marginTop: "30px"
  },
  formBtn: {
    color: "#ffffff",
    backgroundColor: "#f32836",
    "&:hover": {
      backgroundColor: "#e10d1b"
    }
  },
  featuresContainer: {
    marginTop: "30px"
  }
}));

const ProductItemPageComponent = ({ product }) => {
  const classes = useStyles();
  const discPrice = discountPrice(product.price, product.discount);

  return (
    <Container>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={6}>
          <CardMedia
            className={classes.img}
            component="img"
            src={`https://climbing-shop.s3-eu-west-1.amazonaws.com/public/product-image/${product.id}/1.jpg`}
          />
        </Grid>
        <Grid item container direction="column" xs={6}>
          <Typography variant="h4" component="h2">
            {product.productName}
          </Typography>
          <Typography variant="h5" component="h1">
            {product.manufacturer}
          </Typography>
          <Grid container direction="row" alignItems="baseline">
            {product.discount === "0" ? (
              <Grid item container xs={4}>
                <Typography className={classes.currentPrice} variant="h2">
                  {product.price} zł
                </Typography>
              </Grid>
            ) : (
              <Fragment>
                <Grid item container xs={4}>
                  <Typography variant="h2" className={classes.currentPrice}>
                    {discPrice}zł
                  </Typography>
                </Grid>
                <Grid item container xs={8}>
                  <Typography variant="h4" className={classes.oldPrice}>
                    {product.price} zł
                  </Typography>
                </Grid>
                <Grid item container xs={12}>
                  <Typography variant="h6" className={classes.save}>
                    you save {product.discount}%
                  </Typography>
                </Grid>
              </Fragment>
            )}
          </Grid>
          <Typography variant="body1">{product.description}</Typography>
          <form>
            <Grid container className={classes.formContainer}>
              <Grid item xs={4}>
                quantity // ToDo
              </Grid>
              <Grid item xs={8}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.formBtn}
                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Grid container className="">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Description:
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            praesentium, laboriosam nemo quae dignissimos laudantium officiis
            minus quo animi dolorum eum facilis asperiores possimus porro sit
            perferendis assumenda soluta quasi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error praesentium, laboriosam nemo
            quae dignissimos laudantium officiis minus quo animi dolorum eum
            facilis asperiores possimus porro sit perferendis assumenda soluta
            quasi!
          </Typography>
        </Grid>
        <Grid container item className={classes.featuresContainer}>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              Features:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" gutterBottom>
              Tech:
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductItemPageComponent;
